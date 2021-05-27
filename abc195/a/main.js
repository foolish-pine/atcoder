const main = (args) => {
  const input = args.trim().split("\n");
  const M = Number(input[0].split(" ")[0]);
  const H = Number(input[0].split(" ")[1]);
  if (H % M === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
