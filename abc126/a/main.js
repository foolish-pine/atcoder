const main = (args) => {
  const input = args.trim().split("\n");
  const [n, k] = input[0].split(" ").map((n) => Number(n));
  const s = input[1];

  let ans = s.split("");
  ans[k - 1] = ans[k - 1].toLowerCase();
  ans = ans.join("");
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
