const main = (args) => {
  const input = args.trim().split("\n");
  let n = BigInt(input[0]);

  let k = 0;
  let num = 2n;
  while (n >= num) {
    num *= 2n;
    k++;
  }
  console.log(k);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
