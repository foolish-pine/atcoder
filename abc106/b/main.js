const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  const calcPrimeNum = (num) => {
    let sum = 1;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) sum++;
    }
    sum++;
    return sum;
  };

  let ans = 0;
  for (let i = 1; i <= n; i = i + 2) {
    if (calcPrimeNum(i) === 8) ans++;
  }

  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
