const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  const result = Math.ceil(N / 100);
  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
