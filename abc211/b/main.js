const main = (args) => {
  const input = args.trim().split("\n");
  const s = { H: 0, HR: 0, "2B": 0, "3B": 0 };
  for (let i = 0; i < 4; i++) {
    s[input[i]] = s[input[i]] + 1;
  }
  console.log(Object.values(s).every((n) => n === 1) ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
