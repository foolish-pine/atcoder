const main = (args) => {
  const input = args.trim().split("\r\n");
  const int = input[0].split(".")[0];
  console.log(int);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
