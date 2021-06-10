const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const r = Number(input[0].split(" ")[1]);

  if (n < 10) {
    console.log(r + 100 * (10 - n));
  } else {
    console.log(r);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
