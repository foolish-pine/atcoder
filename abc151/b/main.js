const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const k = Number(input[0].split(" ")[1]);
  const m = Number(input[0].split(" ")[2]);
  const arr = input[1].split(" ").map((n) => Number(n));

  const sum = arr.reduce((a, b) => a + b);
  if (n * m - sum < 0) {
    console.log(0);
    return;
  }
  console.log(n * m - sum <= k ? n * m - sum : -1);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
