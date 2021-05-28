const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const M = Number(input[0].split(" ")[1]);

  const fact = (k) => {
    if (k <= 1) {
      return 1;
    }
    return k * fact(k - 1);
  };

  if (N > 1 && M > 1) {
    console.log(fact(N) / fact(N - 2) / 2 + fact(M) / fact(M - 2) / 2);
  } else if (N <= 1 && M > 1) {
    console.log(fact(M) / fact(M - 2) / 2);
  } else if (N > 1 && M <= 1) {
    console.log(fact(N) / fact(N - 2) / 2);
  } else {
    console.log(0);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
