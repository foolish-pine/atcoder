const main = (args) => {
  const input = args.trim().split("\n");
  const b = input[0];

  if (b === "A") {
    console.log("T");
  } else if (b === "T") {
    console.log("A");
  } else if (b === "G") {
    console.log("C");
  } else {
    console.log("G");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
