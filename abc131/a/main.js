const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];

  for (let i = 0; i < 3; i++) {
    if (s[i] === s[i + 1]) {
      console.log("Bad");
      return;
    }
  }
  console.log("Good");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
