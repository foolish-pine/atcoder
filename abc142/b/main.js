const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const k = Number(input[0].split(" ")[1]);
  const hn = input[1].split(" ").map((n) => Number(n));

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (hn[i] >= k) ans++;
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
