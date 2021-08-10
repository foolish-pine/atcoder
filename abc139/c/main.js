const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const hn = input[1].split(" ").map((n) => Number(n));

  const checked = [...Array(n)].fill(false);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (!checked[i]) {
      let prev = hn[i];
      for (let j = i + 1; j < n; j++) {
        if (prev >= hn[j]) {
          prev = hn[j];
          checked[j] = true;
        } else {
          break;
        }
        ans = Math.max(ans, j - i);
      }
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
