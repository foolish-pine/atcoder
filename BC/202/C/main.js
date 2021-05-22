const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  const A = input[1].split(" ").map((n) => Number(n));
  const B = input[2].split(" ").map((n) => Number(n));
  const C = input[3].split(" ").map((n) => Number(n));

  const B2 = [];
  for (let i = 0; i < N; i++) {
    if (B.includes(A[i])) {
      B2.push([i + 1, A[i]]);
    }
  }
  console.log(B2);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
