const main = (args) => {
  const input = args.trim().split("\n");
  const arr = input[1].split(" ").map((n) => Number(n));
  const max = Math.max(...arr);

  const map = new Map();
  for (let i = 2; i <= max; i++) {
    arr.map((n) => {
      if (n % i === 0) {
        map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 0);
      }
    });
  }
  console.log([...map.entries()].sort((a, b) => b[1] - a[1])[0][0]);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
