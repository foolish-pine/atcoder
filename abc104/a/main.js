const main = (args) => {
  const input = args.trim().split("\n");
  const r = Number(input[0]);

  if (r < 1200) {
    console.log("ABC");
  } else if (r < 2800) {
    console.log("ARC");
  } else {
    console.log("AGC");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
