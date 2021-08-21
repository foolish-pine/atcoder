const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];

  console.log(s === "Hello,World!" ? "AC" : "WA");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
