const main = (args) => {
  const input = args.trim().split("\n");
  const a1 = input[1].split(" ");
  const a2 = new Set(a1);

  console.log(a1.length === a2.size ? "YES" : "NO");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
