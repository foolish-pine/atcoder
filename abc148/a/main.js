const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0]);
  const b = Number(input[1]);

  if ((a === 1 && b === 2) || (a === 2 && b === 1)) {
    console.log(3);
  } else if ((a === 1 && b === 3) || (a === 3 && b === 1)) {
    console.log(2);
  } else {
    console.log(1);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
