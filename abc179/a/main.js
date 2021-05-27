const main = (args) => {
  const input = args.trim().split("\n");
  const S = input[0];

  if (S.slice(-1) !== "s") {
    console.log(S + "s");
  } else {
    console.log(S + "es");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
