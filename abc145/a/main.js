const main = (args) => {
  const input = args.trim().split("\n");
  const r = Number(input[0]);

  console.log(r * r);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
