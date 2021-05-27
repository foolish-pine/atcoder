const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);
  const c = Number(input[1].split(" ")[0]);
  const d = Number(input[1].split(" ")[1]);

  console.log(a * d - b * c);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
