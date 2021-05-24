const main = (args) => {
  const input = args.trim().split("\n");
  const N = input[0];

  if (N.indexOf("7") !== -1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
