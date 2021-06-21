const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  let i = 1;
  let sum = 0;
  while (sum <= n) {
    sum += i;
    if (sum < n) i++;
  }
  console.log(i);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
