const main = (args) => {
  const input = args.trim().split("\n");
  const [ab, bc] = input[0].split(" ").map((n) => Number(n));

  console.log((ab * bc) / 2);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
