const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);

  console.log(Math.max(a + b, a - b, a * b));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
