const main = (args) => {
  const input = args.trim().split("\n");
  const K = Number(input[0].split(" ")[0]);
  const N = Number(input[0].split(" ")[1]);
  const arr = input[1].split(" ").map((n) => Number(n));

  let sum = 0;
  const result = [];
  for (let i = 0; i < N - 1; i++) {
    sum += arr[i + 1] - arr[i];
  }
  result.push(sum);
  sum += K - arr[N - 1] + arr[0];

  for (let i = 0; i < N - 1; i++) {
    result.push(sum - (arr[i + 1] - arr[i]));
  }
  console.log(result.reduce((a, b) => (a < b ? a : b)));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
