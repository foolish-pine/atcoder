const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const d = Number(input[0].split(" ")[1]);

  console.log(Math.ceil(n / (2 * d + 1)));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
