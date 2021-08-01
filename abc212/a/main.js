const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b] = input[0].split(" ").map((n) => Number(n));

  if (0 < a && b === 0) {
    console.log("Gold");
  } else if (a === 0 && 0 < b) {
    console.log("Silver");
  } else {
    console.log("Alloy");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
