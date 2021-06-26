const main = (args) => {
  const input = args.trim().split("\n");
  const arr = input[0]
    .split(" ")
    .map((n) => Number(n))
    .sort((a, b) => a - b);
  console.log(arr[1] + arr[2]);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
