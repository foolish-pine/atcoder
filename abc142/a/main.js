const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  if (n === 1) {
    console.log(1);
    return;
  }
  console.log(n % 2 === 0 ? n / 2 / n : ((n - 1) / 2 + 1) / n);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
