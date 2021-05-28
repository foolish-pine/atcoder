const main = (args) => {
  const input = args.trim().split("\n");
  const S = input[0];

  console.log(S === "ARC" ? "ABC" : "ARC");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
