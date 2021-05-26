const main = (args) => {
  const input = args.trim().split("\n");
  const arr = input[0].split(" ");

  console.log(arr.indexOf("0") + 1);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
