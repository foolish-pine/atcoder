const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const s = input[1];

  console.log(s.slice(0, n / 2) === s.slice(n / 2, n) ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
