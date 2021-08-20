const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b] = input[0].split(" ").map((n) => Number(n));

  console.log(a <= 8 && b <= 8 ? "Yay!" : ":(");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
