const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b] = input[0].split(" ").map((n) => Number(n));
  console.log((a * b) % 2 === 0 ? "No" : "Yes");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
