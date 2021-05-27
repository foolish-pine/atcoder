const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  let result = 0;

  for (let i = 1; i <= N; i++) {
    const x1 = Number(input[i].split(" ")[0]);
    const y1 = Number(input[i].split(" ")[1]);
    for (let j = i; j <= N; j++) {
      const x2 = Number(input[j].split(" ")[0]);
      const y2 = Number(input[j].split(" ")[1]);

      const inc = (y2 - y1) / (x2 - x1);
      if (-1 <= inc && inc <= 1) {
        result++;
      }
    }
  }
  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
