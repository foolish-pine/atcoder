const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];

  let ans = 1000;
  for (let i = 0; i <= s.length - 3; i++) {
    const num = s.slice(i, i + 3);
    ans = Math.min(ans, Math.abs(753 - Number(num)));
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
