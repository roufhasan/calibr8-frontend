export const getPercentage = (value, max) => {
  return Math.min((value / max) * 100, 100);
};
