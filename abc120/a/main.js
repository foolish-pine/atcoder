const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b, c] = input[0].split(" ").map((n) => Number(n));

  console.log(Math.min(c, Math.floor(b / a)));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
