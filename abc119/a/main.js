const main = (args) => {
  const input = args.trim().split("\n");
  const [y, m, d] = input[0].split("/").map((n) => Number(n));

  if (y < 2018) {
    console.log("Heisei");
  } else if (y >= 2020) {
    console.log("TBD");
  } else if (m < 4) {
    console.log("Heisei");
  } else if (m > 4) {
    console.log("TBD");
  } else if (d < 31) {
    console.log("Heisei");
  } else {
    console.log("TBD");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
