const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const X = Number(input[0].split(" ")[1]);
  const S = input[1].split(" ")[0];

  let score = X;
  for (let i = 0; i < N; i++) {
    if (S[i] === "o") {
      score++;
    } else if (S[i] === "x" && score > 0) {
      score--;
    }
  }
  console.log(score);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
