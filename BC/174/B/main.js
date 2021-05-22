const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const D = Number(input[0].split(" ")[1]);

  let count = 0;
  for (let i = 1; i <= N; i++) {
    const x = Number(input[i].split(" ")[0]);
    const y = Number(input[i].split(" ")[1]);

    const d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    if (d <= D) count++;
  }

  console.log(count);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
