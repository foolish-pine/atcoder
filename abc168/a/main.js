const main = (args) => {
  const input = args.trim().split("\n");
  const N = input[0];

  const last = N[N.length - 1];
  if (["2", "4", "5", "7", "9"].includes(last)) {
    console.log("hon");
  } else if (["0", "1", "6", "8"].includes(last)) {
    console.log("pon");
  } else if (["3"].includes(last)) {
    console.log("bon");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
