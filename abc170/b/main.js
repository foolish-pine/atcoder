const main = (args) => {
  const input = args.trim().split("\n");
  const [x, y] = input[0].split(" ").map((n) => Number(n));

  console.log(
    Number.isInteger((y - 2 * x) / 2) &&
      0 <= (y - 2 * x) / 2 &&
      (y - 2 * x) / 2 <= x
      ? "Yes"
      : "No"
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
