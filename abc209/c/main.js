const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const c = input[1]
    .split(" ")
    .map((n) => Number(n))
    .sort((a, b) => a - b);

  let result = 1n;
  for (let i = 0; i < n; i++) {
    if (c[i] - i < 1) {
      result *= 0n;
    }
    result = (result * BigInt(c[i] - i)) % 1000000007n;
  }
  console.log(result.toString());
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
