export const FREE_QUESTION_COUNT = 5;
export const PREMIUM_PRICE_LABEL = "¥1500";

// Create a Stripe Payment Link in your Stripe dashboard and add it to .env as:
// REACT_APP_STRIPE_PAYMENT_LINK=https://buy.stripe.com/your_payment_link
export const STRIPE_PAYMENT_LINK = process.env.REACT_APP_STRIPE_PAYMENT_LINK || "";
