const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const s = input[1];

  console.log(s.indexOf("1") % 2 === 0 ? "Takahashi" : "Aoki");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
