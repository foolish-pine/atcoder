const main = (args) => {
  const input = args.trim().split("\n");
  const an = input[1].split(" ").map((n) => Number(n));

  const sort = [...an].sort((a, b) => b - a);
  console.log(an.indexOf(sort[1]) + 1);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
