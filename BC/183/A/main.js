const main = (args) => {
  const input = args.trim().split("\n");
  const num = Number(input[0]);
  if (num >= 0) {
    console.log(num);
  } else {
    console.log(0);
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
