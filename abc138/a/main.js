const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0]);
  const s = input[1];

  console.log(a >= 3200 ? s : "red");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
