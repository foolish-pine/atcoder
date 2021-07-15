const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  console.log(
    n % 2 === 0 ? "0.5000000000" : ((Math.floor(n / 2) + 1) / n).toFixed(10)
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
