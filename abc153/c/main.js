const main = (args) => {
  const input = args.trim().split("\n");
  const k = Number(input[0].split(" ")[1]);
  const arr = input[1].split(" ").map((n) => Number(n));

  if (k >= arr.length) {
    console.log(0);
    return;
  }

  arr.sort((a, b) => b - a);
  arr.splice(0, k);
  console.log(arr.reduce((a, b) => a + b));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
