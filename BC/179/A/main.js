const main = (args) => {
  const input = args.trim().split("\n");
  const S = input[0];

  if (S.slice(-1) !== "s") {
    console.log(S + "s");
  } else {
    console.log(S + "es");
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
