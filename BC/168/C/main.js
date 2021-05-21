const main = (args) => {
  const input = args.trim().split("\n");
  const A = Number(input[0].split(" ")[0]);
  const B = Number(input[0].split(" ")[1]);
  const H = Number(input[0].split(" ")[2]);
  const M = Number(input[0].split(" ")[3]);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
