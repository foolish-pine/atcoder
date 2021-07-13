const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (i.toString().length % 2 !== 0) ans++;
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
