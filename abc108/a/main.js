const main = (args) => {
  const input = args.trim().split("\n");
  const k = Number(input[0]);

  console.log(Math.floor(k / 2) * Math.ceil(k / 2));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
