const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const X = Number(input[0].split(" ")[1]);
  const T = Number(input[0].split(" ")[2]);

  console.log(Math.ceil(N / X) * T);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
