const main = (args) => {
  const input = args.trim().split("\n");
  const X = Number(input[0]);

  if (X >= 30) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
