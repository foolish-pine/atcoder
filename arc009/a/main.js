const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Number(input[i].split(" ")[0]) * Number(input[i].split(" ")[1]);
  }
  console.log(Math.floor(sum * 1.05));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
