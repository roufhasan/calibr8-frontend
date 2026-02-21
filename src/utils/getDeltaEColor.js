export const getDeltaEColor = (value) => {
  if (value < 2.0) return "text-emerald-700";
  if (value < 4.0) return "text-amber-600";
  return "text-red-800";
};
