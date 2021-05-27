const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0]);

  console.log(a + Math.pow(a, 2) + Math.pow(a, 3));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
