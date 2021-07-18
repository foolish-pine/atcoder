const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];
  const t = input[1];

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) ans++;
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
