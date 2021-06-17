const main = (args) => {
  const input = args.trim().split("\n");
  const h = Number(input[0].split(" ")[0]);
  const arr = input[1].split(" ").map((n) => Number(n));

  console.log(h <= arr.reduce((a, b) => a + b) ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
