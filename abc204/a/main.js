const main = (args) => {
  const input = args.trim().split("\n");
  const a = input[0].split(" ")[0];
  const b = input[0].split(" ")[1];

  if (a === b) {
    console.log(a);
  } else if (a === "0" && b === "1") {
    console.log(2);
  } else if (a === "0" && b === "2") {
    console.log(1);
  } else if (a === "1" && b === "0") {
    console.log(2);
  } else if (a === "1" && b === "2") {
    console.log(0);
  } else if (a === "2" && b === "0") {
    console.log(1);
  } else if (a === "2" && b === "1") {
    console.log(0);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
