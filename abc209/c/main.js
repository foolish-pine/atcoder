const main = (args) => {
  const input = args.trim().split("\n");
  const c = input[1].split(" ").map((n) => BigInt(n));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
