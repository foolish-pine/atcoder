const main = (args) => {
  const input = args.trim().split("\n");
  const [n, i] = input[0].split(" ").map((n) => Number(n));

  console.log(n - i + 1);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
