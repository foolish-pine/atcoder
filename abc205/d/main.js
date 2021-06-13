const main = (args) => {
  const input = args.trim().split("\n");
  const qNum = Number(input[0].split(" ")[1]);
  const arr = input[1].split(" ").map((n) => Number(n));

  for (let i = 2; i < 2 + qNum; i++) {
    const q = Number(input[i]);
    let ans = q;
    const a = arr.filter((num) => num <= q).length;
    ans += a;
    const b = arr.filter((num) => num <= ans).length - a;
    ans += b;
    console.log(ans);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
