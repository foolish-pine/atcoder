const main = (args) => {
  const input = args.trim().split("\n");
  const l = Number(input[0].split(" ")[0]);
  const r = Number(input[0].split(" ")[1]);

  const n = Math.min(l, r);
  const ln = input[1].split(" ").map((n) => Number(n));
  const rn = input[2].split(" ").map((n) => Number(n));
  const less = ln.length < rn.length ? ln : rn;
  const more = ln.length >= rn.length ? ln : rn;
  let pair = 0;
  for (let i = 0; i < n; i++) {
    if (more.includes(less[i])) {
      pair++;
      more.splice(more.indexOf(less[i]), 1);
    }
  }
  console.log(pair);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
