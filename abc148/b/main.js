const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const s = input[1].split(" ")[0];
  const t = input[1].split(" ")[1];

  let ans = "";
  for (let i = 0; i < n; i++) {
    ans += s[i];
    ans += t[i];
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
