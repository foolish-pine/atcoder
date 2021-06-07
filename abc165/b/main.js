const main = (args) => {
  const input = args.trim().split("\n");
  const x = input[0];

  let i = 0;
  let m = 100n;
  while (m < x) {
    m = (m * 101n) / 100n;
    i++;
  }
  console.log(i);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
