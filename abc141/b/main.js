const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];

  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      if (!["L", "U", "D"].includes(s[i])) {
        console.log("No");
        return;
      }
    } else {
      if (!["R", "U", "D"].includes(s[i])) {
        console.log("No");
        return;
      }
    }
  }
  console.log("Yes");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
