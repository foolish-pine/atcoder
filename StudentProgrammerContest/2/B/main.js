const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const M = Number(input[0].split(" ")[1]);
  const A = input[1].split(" ");
  const B = input[2].split(" ");

  const filteredA = A.filter((num) => !B.includes(num));
  const filteredB = B.filter((num) => !A.includes(num));
  const result = [...new Set([...filteredA, ...filteredB])];
  console.log(...result.sort((a, b) => a - b));
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
