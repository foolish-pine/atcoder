const main = (args) => {
  const input = args.trim().split("\n");
  const [x1, x2, x3, x4] = input[0].split("").map((n) => Number(n));

  if (x1 === x2 && x1 === x3 && x1 === x4) {
    console.log("Weak");
    return;
  }

  if (x2 === (x1 + 1) % 10 && x3 === (x2 + 1) % 10 && x4 === (x3 + 1) % 10) {
    console.log("Weak");
    return;
  }

  console.log("Strong");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
