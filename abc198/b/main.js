const main = (args) => {
  const input = args.trim().split("\n");
  const num = input[0];
  const numReverse = Number(num.split("").reverse().join(""));
  if (numReverse === Number(String(numReverse).split("").reverse().join(""))) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
