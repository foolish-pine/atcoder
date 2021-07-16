const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);
  const c = Number(input[0].split(" ")[2]);

  if (a + b === c && a - b === c) {
    console.log("?");
  } else if (a + b === c) {
    console.log("+");
  } else if (a - b === c) {
    console.log("-");
  } else {
    console.log("!");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
