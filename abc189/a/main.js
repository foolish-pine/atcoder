const main = (args) => {
  const input = args.trim().split("\n");
  const line1 = input[0].split("");
  const L1 = line1[0];
  const L2 = line1[1];
  const L3 = line1[2];
  if (L1 === L2 && L2 === L3) {
    console.log("Won");
  } else {
    console.log("Lost");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
