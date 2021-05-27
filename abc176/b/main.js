const main = (args) => {
  const input = args.trim().split("\n");
  const N = input[0];

  const sum = N.split("")
    .map((n) => Number(n))
    .reduce((a, b) => a + b);
  if (sum % 9 === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
