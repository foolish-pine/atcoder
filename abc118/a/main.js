const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b] = input[0].split(" ").map((n) => Number(n));

  console.log(b % a === 0 ? a + b : b - a);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
