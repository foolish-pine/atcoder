const main = (args) => {
  const input = args.trim().split("\n");
  const [n, k] = input[0].split(" ").map((n) => Number(n));
  const cn = input[1].split(" ");

  const map = new Map();
  for (let i = 0; i < k; i++) {
    if (map.has(cn[i])) {
      map.set(cn[i], map.get(cn[i]) + 1);
    } else {
      map.set(cn[i], 1);
    }
  }
  let max = map.size;
  for (let i = k; i < n; i++) {
    map.set(cn[i - k], map.get(cn[i - k]) - 1);
    if (map.get(cn[i - k]) === 0) map.delete(cn[i - k]);
    if (map.has(cn[i])) {
      map.set(cn[i], map.get(cn[i]) + 1);
    } else {
      map.set(cn[i], 1);
    }
    max = Math.max(max, map.size);
  }
  console.log(max);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
