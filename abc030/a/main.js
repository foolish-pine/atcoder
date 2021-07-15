const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);
  const c = Number(input[0].split(" ")[2]);
  const d = Number(input[0].split(" ")[3]);

  if (b / a > d / c) {
    console.log("TAKAHASHI");
  } else if (b / a < d / c) {
    console.log("AOKI");
  } else {
    console.log("DRAW");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
