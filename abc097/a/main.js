const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b, c, d] = input[0].split(" ").map((n) => Number(n));

  console.log(
    (Math.abs(b - a) <= d && Math.abs(c - b) <= d) || Math.abs(c - a) <= d
      ? "Yes"
      : "No"
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
