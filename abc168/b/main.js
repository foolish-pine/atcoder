const main = (args) => {
  const input = args.trim().split("\n");
  const K = Number(input[0]);
  const S = input[1];

  if (S.length <= K) {
    console.log(S);
  } else {
    const truncated = S.slice(0, K) + "...";
    console.log(truncated);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
