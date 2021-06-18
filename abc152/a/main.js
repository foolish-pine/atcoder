const main = (args) => {
  const input = args.trim().split("\n");
  const arr = input[0].split(" ");
  console.log(arr[0] === arr[1] ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
