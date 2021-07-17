const main = (args) => {
  const input = args.trim().split("\n");
  const [n, k] = input[0].split(" ").map((n) => Number(n));
  const cn = input[1].split(" ");

  const arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(cn[i]);
  }
  let max = new Set(arr).size;
  for (let i = k; i < n; i++) {
    let _max = max;
    if (arr.indexOf(arr[0]) === arr.lastIndexOf(arr[0])) _max--;
    arr.shift();
    arr.push(cn[i]);
    if (arr.indexOf(arr[k - 1]) === arr.lastIndexOf(arr[k - 1])) _max++;
    max = Math.max(max, _max);
  }
  console.log(max);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
