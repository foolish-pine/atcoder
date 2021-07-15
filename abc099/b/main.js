const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);

  const diff = b - a;
  const towers = [1];
  for (let i = 2; i < 1000; i++) {
    towers.push(towers[towers.length - 1] + i);
  }
  console.log(towers[diff - 2] - a);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
