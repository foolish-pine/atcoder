const main = (args) => {
  const input = args.trim().split("\n");
  let [a, b] = input[0].split(" ").map((n) => Number(n));

  let sum = 0;
  if (a > b) {
    sum += a;
    a--;
  } else {
    sum += b;
    b--;
  }

  if (a > b) {
    sum += a;
  } else {
    sum += b;
  }

  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
