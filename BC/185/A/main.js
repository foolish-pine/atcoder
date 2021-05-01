const main = (args) => {
  const input = args.trim().split("\n");
  const nums = input[0].split(" ").map((num) => Number(num));

  console.log(Math.min(...nums));
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
