const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);

  console.log(b - a + 1 > 0 ? b - a + 1 : 0);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
