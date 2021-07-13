const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  const countPrime = (num) => {
    let primes = {};
    for (let i = 2; i * i <= num; i++) {
      let tmp = 0;
      while (num % i === 0) {
        tmp++;
        num /= i;
      }
      if (tmp !== 0) primes[i] = tmp;
    }
    if (num !== 1) primes[num] = 1;
    return Object.values(primes).reduce((a, b) => a * (b + 1), 1);
  };

  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    ans += countPrime(i + 1);
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
