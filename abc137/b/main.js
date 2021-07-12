const { DH_UNABLE_TO_CHECK_GENERATOR } = require("constants");

const main = (args) => {
  const input = args.trim().split("\n");
  const k = Number(input[0].split(" ")[0]);
  const x = Number(input[0].split(" ")[1]);

  const min = x - k + 1;
  const max = x + k - 1;
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  console.log(...arr);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
