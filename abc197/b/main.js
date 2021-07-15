const main = (args) => {
  const input = args.trim().split("\n");
  const h = Number(input[0].split(" ")[0]);
  const w = Number(input[0].split(" ")[1]);
  const x = Number(input[0].split(" ")[2]);
  const y = Number(input[0].split(" ")[3]);

  let ans = 1;
  for (let i = y - 2; i >= 0; i--) {
    if (input[x][i] === "#") break;
    ans++;
  }
  for (let i = y; i < w; i++) {
    if (input[x][i] === "#") break;
    ans++;
  }
  for (let i = x - 1; i >= 1; i--) {
    if (input[i][y - 1] === "#") break;
    ans++;
  }
  for (let i = x + 1; i <= h; i++) {
    if (input[i][y - 1] === "#") break;
    ans++;
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
