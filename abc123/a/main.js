const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0]);
  const e = Number(input[4]);
  const k = Number(input[5]);

  console.log(e - a <= k ? "Yay!" : ":(");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
