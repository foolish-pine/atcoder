const main = (args) => {
  const input = args.trim().split("\n");
  const w = input[0];

  const map = {};
  for (let i = 0; i < w.length; i++) {
    map[w[i]] = map[w[i]] ? map[w[i]] + 1 : 1;
  }
  console.log(Object.values(map).every((n) => n % 2 === 0) ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
