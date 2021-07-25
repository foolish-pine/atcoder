const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b, c] = input[0].split(" ").map((n) => BigInt(n));

  const suma = ((1n + a) * a) / 2n;
  const sumb = ((1n + b) * b) / 2n;
  const sumc = ((1n + c) * c) / 2n;
  console.log(((suma * sumb * sumc) % 998244353n).toString());
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
