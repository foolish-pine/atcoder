const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const arr = input[1].split(" ").map((n) => Number(n));

  console.log(
    arr.reduce((a, b) => {
      if (b >= 10) {
        a += b - 10;
      }
      return a;
    }, 0)
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
