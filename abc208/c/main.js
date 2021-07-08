const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const k = input[0].split(" ")[1];
  const a1 = input[1].split(" ").map((n) => Number(n));

  const answer = new Array(n).fill(BigInt(k) / BigInt(n));

  const a2 = [];
  for (let i = 0; i < n; i++) {
    a2.push(i);
  }

  a2.sort((a, b) => a1[a] - a1[b]);
  for (let i = 0n; i < BigInt(k) % BigInt(n); i++) {
    answer[a2[i.toString()]] += 1n;
  }
  answer.map((n) => console.log(n.toString()));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
