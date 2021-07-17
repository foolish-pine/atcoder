const main = (args) => {
  const input = args.trim().split("\n");
  const [p, q, r] = input[0].split(" ").map((n) => Number(n));

  console.log(Math.min(p + q, q + r, r + p));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
