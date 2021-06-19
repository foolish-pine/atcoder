const main = (args) => {
  const input = args.trim().split("\n");
  const c = input[0];

  console.log(String.fromCodePoint(c.codePointAt(0) + 1));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
