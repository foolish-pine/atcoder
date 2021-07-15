const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const ln = input[1].split(" ").map((n) => Number(n));

  let ans = 0;
  for (let i = 0; i < n; i++) {
    const a = ln[i];
    for (let j = i + 1; j < n; j++) {
      const b = ln[j];
      if (a === b) continue;
      for (let k = j + 1; k < n; k++) {
        const c = ln[k];
        if (a === c || b === c) continue;
        if (a < b + c && b < a + c && c < a + b) ans++;
      }
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
