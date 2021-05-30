const main = (args) => {
  const input = args.trim().split("\n");
  const A = Number(input[0].split(" ")[0]);
  const B = Number(input[0].split(" ")[1]);

  console.log(A * B);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
