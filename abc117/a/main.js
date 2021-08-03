const main = (args) => {
  const input = args.trim().split("\n");
  const t = Number(input[0].split(" ")[0]);
  const x = Number(input[0].split(" ")[1]);

  console.log(t / x);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
