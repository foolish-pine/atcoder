const main = (args) => {
  const input = args.trim().split("\n");
  const k = Number(input[0].split(" ")[0]);
  const x = Number(input[0].split(" ")[1]);

  console.log(500 * k >= x ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
