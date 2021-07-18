const main = (args) => {
  const input = args.trim().split("\n");
  const [a, b] = input[0].split(" ").map((n) => Number(n));
  const s = input[1];

  const reg = new RegExp("[0-9]{" + a + "}" + "-" + "[0-9]{" + b + "}");
  console.log(reg.test(s) ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
