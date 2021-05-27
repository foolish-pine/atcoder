const main = (args) => {
  const input = args.trim().split("\n");
  const int = input[0].split(".")[0];
  console.log(int);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
