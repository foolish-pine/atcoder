const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b] = input[0].split(" ").map((n) => Number(n));

  console.log(
    Math.max(a + b, a - b, a * b) === -0 ? 0 : Math.max(a + b, a - b, a * b)
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
