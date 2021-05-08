const main = (args) => {
  const input = args.trim().split("\n");
  let n = 1;
  for (let i = 1; i < 200000; i++) {
    n += i;
  }
  console.log(n);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
