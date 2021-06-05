const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];
  const t = input[1];

  const reg = new RegExp(s + "[a-z]");
  console.log(reg.test(t) ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
