const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  console.log(Math.ceil(N / 1000) * 1000 - N);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
