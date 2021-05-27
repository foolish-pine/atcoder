const main = (args) => {
  const input = args.trim().split("\n");
  for (let i = 0; i < input.length; i++) {
    if ((i + 1) % 2 !== 0 && input[i].match(/[A-Z]/)) {
      console.log("No");
      return;
    }
    if ((i + 1) % 2 === 0 && input[i].match(/[a-z]/)) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
