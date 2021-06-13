const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);

  console.log((a / 100) * b);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
