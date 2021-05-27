const main = (args) => {
  const input = args.trim().split("\n");
  const M = Number(input[0].split(" ")[1]);
  const A = input[1].split(" ").map((n) => Number(n));

  const sum = A.reduce((a, b) => a + b);
  const selects = A.filter((n) => n >= sum / (4 * M));
  console.log(selects.length >= M ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
