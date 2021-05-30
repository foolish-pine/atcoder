const main = (args) => {
  const input = args.trim().split("\n");
  const arr = input[0].split(" ");

  if (arr[0] === arr[1]) {
    console.log(arr[2]);
  } else if (arr[1] === arr[2]) {
    console.log(arr[0]);
  } else if (arr[0] === arr[2]) {
    console.log(arr[1]);
  } else {
    console.log(0);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
