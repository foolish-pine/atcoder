const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  if (n <= 125) {
    console.log("4");
  } else if (n <= 211) {
    console.log("6");
  } else {
    console.log("8");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
