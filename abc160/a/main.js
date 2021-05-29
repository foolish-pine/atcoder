const main = (args) => {
  const input = args.trim().split("\n");
  const S = input[0];

  console.log(S[2] === S[3] && S[4] === S[5] ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
