const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  const sq = Math.sqrt(N);
  const arr = [];
  for (let i = 1; i <= sq; i++) {
    if (i === N / i) {
      arr.push(i);
      continue;
    }
    if (N % i === 0) {
      arr.push(i);
      arr.push(N / i);
    }
  }
  arr.sort((a, b) => a - b);
  arr.forEach((n) => {
    console.log(n);
  });
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
