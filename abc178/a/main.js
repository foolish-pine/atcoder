const main = (args) => {
  const input = args.trim().split("\n");
  const x = Number(input[0]);

  if (x === 0) {
    console.log("1");
  } else {
    console.log("0");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
