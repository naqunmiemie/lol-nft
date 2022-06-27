export function decimals18todecimals4(num: string): string {
  const decimals = 18;
  const toDecimals = 4;
  const len = num.length;
  if (len > 18) {
    num =
      num.substring(0, len - decimals) +
      "." +
      num.substring(len - decimals, len - decimals + 4);
  } else if (num.length === decimals) {
    num = "0." + num.substring(0, toDecimals);
  } else if (num.length === decimals - 1) {
    num = "0.0" + num.substring(0, toDecimals - 1);
  } else if (num.length === decimals - 2) {
    num = "0.00" + num.substring(0, toDecimals - 2);
  } else if (num.length === decimals - 3) {
    num = "0.000" + num.substring(0, toDecimals - 3);
  } else {
    num = "0.0000";
  }
  return num;
}
