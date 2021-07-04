const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const k = Number(input[0].split(" ")[1]);
  const arr = input[1].split(" ").map((n) => Number(n));

  const min = BigInt(k) / BigInt(n);
  const rest = BigInt(k) % BigInt(n);
  const sortedArr = [...arr].sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (BigInt(sortedArr.indexOf(arr[i])) < rest) {
      console.log((min + 1n).toString());
    } else {
      console.log(min.toString());
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
