const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  if (N % 2 === 0) {
    console.log("White");
  } else {
    console.log("Black");
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
