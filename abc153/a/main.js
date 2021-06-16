const main = (args) => {
  const input = args.trim().split("\n");
  const h = Number(input[0].split(" ")[0]);
  const a = Number(input[0].split(" ")[1]);

  console.log(Math.ceil(h / a));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
