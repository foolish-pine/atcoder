const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const m = Number(input[0].split(" ")[1]);
  const an = input[1].split(" ").map((n) => Number(n));
  const bn = input[2].split(" ").map((n) => Number(n));

  let ans = Infinity;
  for (let i = 0; i < m; i++) {
    const newAn = [...an];
    newAn.push(bn[i]);
    newAn.sort((a, b) => a - b);
    if (newAn.indexOf(bn[i]) === 0) {
      ans = Math.min(
        ans,
        Math.abs(newAn[newAn.indexOf(bn[i])] - newAn[newAn.indexOf(bn[i]) + 1])
      );
    } else if (newAn.indexOf(bn[i]) === n) {
      ans = Math.min(
        ans,
        Math.abs(newAn[newAn.indexOf(bn[i]) - 1] - newAn[newAn.indexOf(bn[i])])
      );
    } else {
      ans = Math.min(
        ans,
        Math.min(
          Math.abs(
            newAn[newAn.indexOf(bn[i]) - 1] - newAn[newAn.indexOf(bn[i])]
          ),
          Math.abs(
            newAn[newAn.indexOf(bn[i])] - newAn[newAn.indexOf(bn[i]) + 1]
          )
        )
      );
    }
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
