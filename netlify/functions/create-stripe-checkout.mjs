import Stripe from 'stripe';

const PRICES = Object.freeze({
  starter: 1499,
  boost: 2999,
  premium: 5999,
  letter: 799,
});

const LABELS = Object.freeze({
  starter: 'Pack Starter',
  boost: 'Pack Boost',
  premium: 'Pack Premium',
  letter: 'Lettre de motivation',
});

export default async (request) => {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Méthode non autorisée.' }), { status: 405, headers: { 'content-type': 'application/json' } });
  }

  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    return new Response(JSON.stringify({ error: 'Paiement momentanément indisponible.' }), { status: 503, headers: { 'content-type': 'application/json' } });
  }

  try {
    const body = await request.json();
    const plan = String(body?.plan || '');
    const wantsLetter = Boolean(body?.letter);
    const email = String(body?.email || '').trim();

    if (!PRICES[plan] || plan === 'letter' || !email) {
      return new Response(JSON.stringify({ error: 'Commande invalide.' }), { status: 400, headers: { 'content-type': 'application/json' } });
    }

    const amount = PRICES[plan] + (wantsLetter ? PRICES.letter : 0);
    const description = wantsLetter ? `${LABELS[plan]} + ${LABELS.letter}` : LABELS[plan];
    const stripe = new Stripe(secret);
    const origin = new URL(request.url).origin;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      customer_email: email,
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: { name: description },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      metadata: {
        plan,
        letter: wantsLetter ? '1' : '0',
      },
      success_url: `${origin}/paiement-confirme.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cv.html#formules`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'content-type': 'application/json' },
    });
  } catch (error) {
    console.error('Stripe Checkout error:', error);
    return new Response(JSON.stringify({ error: 'Impossible de créer le paiement.' }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
};
