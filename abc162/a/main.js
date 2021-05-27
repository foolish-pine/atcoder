const main = (args) => {
  const input = args.trim().split("\n");
  const N = input[0];

  if (N.indexOf("7") !== -1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
