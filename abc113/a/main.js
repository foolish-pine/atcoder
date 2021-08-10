const main = (args) => {
  const input = args.trim().split("\n");
  const [x, y] = input[0].split(" ").map((n) => Number(n));

  console.log(x + y / 2);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
