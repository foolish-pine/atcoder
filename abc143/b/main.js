const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].split(" ").map((n) => Number(n));

  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[i] * arr[j];
    }
  }
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
