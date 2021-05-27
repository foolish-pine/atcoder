const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  if (N % 2 === 0) {
    console.log("White");
  } else {
    console.log("Black");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
