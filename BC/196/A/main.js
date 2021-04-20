const main = (args) => {
  const input = args.trim().split("\n");
  const b = parseInt(input[0].split(" ")[1]);
  const c = parseInt(input[1].split(" ")[0]);
  console.log(Number(b) - Number(c));
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
