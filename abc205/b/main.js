const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const arr1 = input[1]
    .split(" ")
    .map((n) => Number(n))
    .sort((a, b) => a - b);

  const arr2 = [];
  for (let i = 1; i <= n; i++) {
    arr2.push(String(i));
  }

  console.log(arr1.join() === arr2.join() ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
