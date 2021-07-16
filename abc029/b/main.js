const main = (args) => {
  const input = args.trim().split("\n");

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    if (input[i].indexOf("r") !== -1) sum++;
  }
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
