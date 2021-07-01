const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);

  console.log(a - b * 2 > 0 ? a - b * 2 : 0);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
