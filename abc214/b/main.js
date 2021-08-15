const main = (args) => {
  const input = args.trim().split("\n");
  const [s, t] = input[0].split(" ").map((n) => Number(n));

  let ans = 0;
  for (let i = 0; i <= s; i++) {
    for (let j = 0; j <= s - i; j++) {
      for (let k = 0; k <= s - i - j; k++) {
        const a = i;
        const b = j;
        const c = k;
        if (a * b * c <= t) ans++;
      }
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
