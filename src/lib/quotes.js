export const MOTIVATIONAL_QUOTES = [
  "Small steps every day lead to big results.",
  "Your future is built by what you do today.",
  "Learning is your superpower.",
  "Progress beats perfection.",
  "You're capable of more than you think.",
  "If you don't take risks, you can't create a future!",
  "Push through the pain. Giving up hurts more.",
  "Discomfort is the price of admission for growth.",
  "Your potential is louder than your excuses.",
  "The only person you need to beat is yesterday's you.",
  "Your habits decide your direction.",
  "Growth feels like breaking until it feels like becoming.",
];

export function pickRandomQuote() {
  const i = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
  return MOTIVATIONAL_QUOTES[i];
}