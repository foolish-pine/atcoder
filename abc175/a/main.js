const main = (args) => {
  const input = args.trim().split("\n");

  if (input[0].includes("RRR")) {
    console.log(3);
  } else if (input[0].includes("RR")) {
    console.log(2);
  } else if (input[0].includes("R")) {
    console.log(1);
  } else {
    console.log(0);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
