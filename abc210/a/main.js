const main = (args) => {
  const input = args.trim().split("\n");
  const [n, a, x, y] = input[0].split(" ").map((n) => Number(n));

  console.log(n <= a ? n * x : a * x + (n - a) * y);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
