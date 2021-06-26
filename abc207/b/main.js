const main = (args) => {
  const input = args.trim().split("\n");
  const a = input[0].split(" ")[0];
  const b = input[0].split(" ")[1];
  const c = input[0].split(" ")[2];
  const d = input[0].split(" ")[3];

  if (c * d - b > 0) {
    console.log(Math.ceil(a / (c * d - b)));
  } else {
    console.log(-1);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
