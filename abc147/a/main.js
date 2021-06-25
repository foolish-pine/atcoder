const main = (args) => {
  const input = args.trim().split("\n");
  const sum = input[0]
    .split(" ")
    .map((n) => Number(n))
    .reduce((a, b) => a + b);
  console.log(sum >= 22 ? "bust" : "win");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
