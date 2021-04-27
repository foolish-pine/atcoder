const main = (args) => {
  const input = args.trim().split("\n");
  const X = Number(input[0].split(" ")[1]);
  const A = input[1].split(" ").map((num) => Number(num));
  const result = A.filter((num) => num !== X);
  console.log(result.join(" "));
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
