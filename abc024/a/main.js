const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b, c, k] = input[0].split(" ").map((n) => Number(n));
  const [s, t] = input[1].split(" ").map((n) => Number(n));

  console.log(s + t >= k ? a * s + b * t - (s + t) * c : a * s + b * t);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
