const main = (args) => {
  const input = args.trim().split("\n");
  const d = input[0];

  if (d === "22") {
    console.log("Christmas Eve Eve Eve");
  } else if (d === "23") {
    console.log("Christmas Eve Eve");
  } else if (d === "24") {
    console.log("Christmas Eve");
  } else {
    console.log("Christmas");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
