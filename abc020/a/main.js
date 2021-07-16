const main = (args) => {
  const input = args.trim().split("\n");
  const q = input[0];

  console.log(q === "1" ? "ABC" : "chokudai");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
