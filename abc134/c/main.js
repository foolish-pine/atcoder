const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const an = [];
  for (let i = 1; i <= n; i++) {
    an.push(Number(input[i]));
  }

  an.sort((a, b) => b - a);
  const max = an[0];
  const secondMax = an[1];
  for (let i = 1; i <= n; i++) {
    if (Number(input[i]) === max) {
      console.log(secondMax);
    } else {
      console.log(max);
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
