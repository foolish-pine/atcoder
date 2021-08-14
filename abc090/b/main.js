const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b] = input[0].split(" ").map((n) => Number(n));

  let ans = 0;
  for (let i = a; i <= b; i++) {
    if (i.toString() === i.toString().split("").reverse().join("")) ans++;
  }
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
