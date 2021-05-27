const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  console.log(Math.ceil(N / 1000) * 1000 - N);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
