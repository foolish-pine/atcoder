const main = (args) => {
  const input = args.trim().split("\n");
  const x = Number(input[0].split(" ")[0]);
  const a = Number(input[0].split(" ")[1]);

  console.log(x < a ? 0 : 10);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
