const main = (args) => {
  const input = args.trim().split("\n");
  const [x, a, b] = input[0].split(" ").map((n) => Number(n));

  if (b - a <= 0) {
    console.log("delicious");
  } else if (b - a <= x) {
    console.log("safe");
  } else {
    console.log("dangerous");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
