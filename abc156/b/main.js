const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const k = Number(input[0].split(" ")[1]);

  console.log(String(n.toString(k)).length);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
