const main = (args) => {
  const input = args.trim().split("\n");
  let N = Number(input[0].split(" ")[0]);
  const K = Number(input[0].split(" ")[1]);

  for (let i = 1; i <= K; i++) {
    if (N % 200 === 0) {
      N = N / 200;
    } else {
      N = Number(String(N) + "200");
    }
  }
  console.log(N);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
