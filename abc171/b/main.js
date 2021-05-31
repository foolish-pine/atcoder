const main = (args) => {
  const input = args.trim().split("\n");
  const K = Number(input[0].split(" ")[1]);
  const arr = input[1]
    .split(" ")
    .map((n) => Number(n))
    .sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
