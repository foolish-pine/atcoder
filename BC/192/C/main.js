const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const K = Number(input[0].split(" ")[1]);

  let a = N;
  for (let i = 1; i <= K; i++) {
    a =
      Number(
        String(a)
          .split("")
          .sort((a, b) => b - a)
          .join("")
      ) -
      Number(
        String(a)
          .split("")
          .sort((a, b) => a - b)
          .join("")
      );
  }
  console.log(a);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
