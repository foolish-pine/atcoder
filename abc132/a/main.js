const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];

  const map = {};
  for (let i = 0; i < 4; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  }
  console.log(Object.values(map).every((n) => n === 2) ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
