const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].split(" ").map((n) => Number(n));

  let min = arr[0];
  let ans = 1;
  for (let i = 1; i < n; i++) {
    if (min >= arr[i]) {
      ans++;
      min = arr[i];
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
