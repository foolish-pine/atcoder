const main = (args) => {
  const input = args.trim().split("\n");
  const arr = input[0].split(" ");

  if (
    (arr[0] === arr[1] && arr[1] !== arr[2]) ||
    (arr[1] === arr[2] && arr[0] !== arr[1]) ||
    (arr[0] === arr[2] && arr[0] !== arr[1])
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
