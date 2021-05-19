const main = (args) => {
  const input = args.trim().split("\r\n");
  const N = Number(input[0]);
  let count = 0;

  for (let i = 1; i <= 1000001; i++) {
    if (Number(String(i) + String(i)) <= N) {
      count++;
    }
  }

  console.log(count);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
