const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);

  if (a >= 13) {
    console.log(b);
  } else if (6 <= a && a <= 12) {
    console.log(b / 2);
  } else {
    console.log(0);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
