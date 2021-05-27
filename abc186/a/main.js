const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const W = Number(input[0].split(" ")[1]);

  console.log(Math.floor(N / W));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
