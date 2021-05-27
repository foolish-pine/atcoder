const main = (args) => {
  const input = args.trim().split("\n");
  const nums = input[0].split(" ").map((num) => Number(num));

  console.log(Math.min(...nums));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
