const main = (args) => {
  const input = args.trim().split("\n");
  const X = Number(input[0]);

  console.log(Math.floor(X / 500) * 1000 + Math.floor((X % 500) / 5) * 5);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
