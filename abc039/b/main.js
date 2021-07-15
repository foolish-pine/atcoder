const main = (args) => {
  const input = args.trim().split("\n");
  const x = Number(input[0]);

  console.log(Math.sqrt(Math.sqrt(x)));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
