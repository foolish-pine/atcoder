const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  console.log(n % 2 === 0 ? n : n * 2);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
