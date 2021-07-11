const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const x = Number(input[0].split(" ")[1]);
  const a = input[1].split(" ").map((n) => Number(n));

  const sum = a.reduce((a, b) => a + b) - Math.floor(n / 2);
  console.log(sum <= x ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
