const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const vn = input[1]
    .split(" ")
    .map((n) => Number(n))
    .sort((a, b) => a - b);

  let ans = vn[0] / Math.pow(2, n - 1);
  for (let i = 1; i < n; i++) {
    ans += vn[i] / Math.pow(2, n - i);
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
