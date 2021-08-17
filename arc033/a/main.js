const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  console.log((n * (n + 1)) / 2);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
