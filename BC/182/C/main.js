const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  const k = input[0].length;

  const sum = input[0].split("").reduce((a, b) => Number(a) + Number(b));

  if (sum % 3 === 0) {
    console.log(0);
    return;
  }

  let count = 0;
  const arr = input[0]
    .split("")
    .map((n) => Number(n))
    .sort();
  for (let i = 0; i < k; i++) {}
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
