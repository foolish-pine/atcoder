const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b] = input[0].split(" ").map((n) => n);

  console.log(a ^ b);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
