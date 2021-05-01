const main = (args) => {
  const input = args.trim().split("\n");
  let count = 0;
  for (let i = 0; i <= 8; i++) {
    const word = input[0].slice(i, i + 4);
    if (word === "ZONe") count++;
  }
  console.log(count);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
