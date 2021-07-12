const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const a = input[1].split(" ").map((n) => Number(n));

  const obj = {};
  for (let i = 0; i < n; i++) {
    obj[a[i]] = obj[a[i]] ? obj[a[i]] + 1 : 1;
  }

  const exceptional = Object.values(obj).reduce((a, b) => {
    return a + (b * (b - 1)) / 2;
  }, 0);

  const result = (n * (n - 1)) / 2 - exceptional;
  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
