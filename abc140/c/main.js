const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const bn = input[1].split(" ").map((n) => Number(n));

  const an = [];
  an[0] = bn[0];
  for (let i = 1; i < n - 1; i++) {
    an[i] = Math.min(bn[i - 1], bn[i]);
  }
  an[n - 1] = bn[n - 2];
  console.log(an.reduce((a, b) => a + b));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
