const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const K = Number(input[0].split(" ")[1]);

  let sum = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
      sum += i * 100;
      sum += j;
    }
  }
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
