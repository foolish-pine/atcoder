const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const a = Number(input[0].split(" ")[1]);
  const b = Number(input[0].split(" ")[2]);

  console.log(Math.min(n * a, b));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
