const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);
  const c = Number(input[0].split(" ")[2]);

  console.log(c - (a - b) > 0 ? c - (a - b) : 0);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
