const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const an = input[1].split(" ").map((n) => Number(n));
  const bn = input[2].split(" ").map((n) => Number(n));
  const cn = input[3].split(" ").map((n) => Number(n));

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (an[i - 1] + 1 === an[i]) ans += cn[an[i - 1] - 1];
    ans += bn[an[i] - 1];
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
