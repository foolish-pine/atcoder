const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const an = input[1].split(" ").map((n) => Number(n));

  const map = [];
  for (let i = 1; i <= n; i++) {
    map.push({ id: i, num: an[i - 1] });
  }
  map.sort((a, b) => a.num - b.num);

  console.log(map.map((x) => x.id).join(" "));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
