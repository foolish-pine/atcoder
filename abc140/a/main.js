const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  console.log(Math.pow(n, 3));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
