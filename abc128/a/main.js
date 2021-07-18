const main = (args) => {
  const input = args.trim().split("\n");
  const [a, p] = input[0].split(" ").map((n) => Number(n));

  console.log(Math.floor((a * 3 + p) / 2));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
