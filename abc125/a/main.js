const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b, t] = input[0].split(" ").map((n) => Number(n));

  let sum = 0;
  for (let i = a; i < t + 0.5; i += a) {
    sum += b;
  }
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
