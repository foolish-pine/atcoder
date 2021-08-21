const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0].split(" ")[0];
  const k = input[0].split(" ")[1];
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
