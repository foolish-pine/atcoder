const main = (args) => {
  const input = args.trim().split("\n");
  console.log(input[0] === input[0].toUpperCase() ? "A" : "a");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
