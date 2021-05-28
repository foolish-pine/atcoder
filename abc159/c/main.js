const main = (args) => {
  const input = args.trim().split("\n");
  const L = Number(input[0]);

  console.log((L / 3) ** 3);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
