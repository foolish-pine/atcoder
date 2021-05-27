const main = (args) => {
  const input = args.trim().split("\n");
  const X = Number(input[0].split(" ")[0]);
  const Y = Number(input[0].split(" ")[1]);
  const Z = Number(input[0].split(" ")[2]);

  console.log(`${Z} ${X} ${Y}`);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
