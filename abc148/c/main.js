const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);

  const GCD = (x, y) => {
    if (y === 0) {
      return x;
    } else {
      return GCD(y, x % y);
    }
  };
  console.log((a * b) / GCD(a, b));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
