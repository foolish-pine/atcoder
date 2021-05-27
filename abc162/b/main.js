const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) sum += i;
  }
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
