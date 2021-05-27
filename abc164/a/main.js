const main = (args) => {
  const input = args.trim().split("\n");
  const S = Number(input[0].split(" ")[0]);
  const W = Number(input[0].split(" ")[1]);

  if (S <= W) {
    console.log("unsafe");
  } else {
    console.log("safe");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
