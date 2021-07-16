const main = (args) => {
  const input = args.trim().split("\n");
  const h1 = input[0].split(" ")[0];
  const w1 = input[0].split(" ")[1];
  const h2 = input[1].split(" ")[0];
  const w2 = input[1].split(" ")[1];

  console.log(h1 === h2 || h1 === w2 || w1 === h2 || w1 === w2 ? "YES" : "NO");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
