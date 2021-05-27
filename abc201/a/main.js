const main = (args) => {
  const input = args.trim().split("\n");
  const A1 = Number(input[0].split(" ")[0]);
  const A2 = Number(input[0].split(" ")[1]);
  const A3 = Number(input[0].split(" ")[2]);

  const arr = [A1, A2, A3];
  arr.sort((a, b) => a - b);
  if (arr[0] - arr[1] === arr[1] - arr[2]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
