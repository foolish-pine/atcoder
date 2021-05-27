const main = (args) => {
  const input = args.trim().split("\n");
  const number = Number(input[0]);
  console.log(100 - (number % 100));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
