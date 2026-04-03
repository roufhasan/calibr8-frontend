export function formatBDT(price) {
  const [integer, decimal] = price.toString().split(".");

  const lastThree = integer.slice(-3);
  const rest = integer.slice(0, -3);

  const formatted =
    rest.length > 0
      ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree
      : lastThree;

  return "৳" + formatted + (decimal ? "." + decimal : "");
}
