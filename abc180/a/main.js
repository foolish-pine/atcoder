const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const A = Number(input[0].split(" ")[1]);
  const B = Number(input[0].split(" ")[2]);

  console.log(N - A + B);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
