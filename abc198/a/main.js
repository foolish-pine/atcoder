const main = (args) => {
  const input = args.trim().split("\n");
  const sweetsNum = Number(input[0]);
  console.log(sweetsNum - 1);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
