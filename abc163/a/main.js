const main = (args) => {
  const input = args.trim().split("\n");
  const r = Number(input[0]);

  console.log(2 * r * Math.PI);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
