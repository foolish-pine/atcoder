const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  const price = Math.floor(n * 1.08);
  if (price < 206) {
    console.log("Yay!");
  } else if (price === 206) {
    console.log("so-so");
  } else {
    console.log(":(");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
