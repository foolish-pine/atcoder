const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];

  const s2 = s
    .split("")
    .filter((c) => ["c", "h", "o", "k", "u", "d", "a", "i"].includes(c));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
