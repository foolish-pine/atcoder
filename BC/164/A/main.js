const main = (args) => {
  const input = args.trim().split("\n");
  const S = Number(input[0].split(" ")[0]);
  const W = Number(input[0].split(" ")[1]);

  if (S <= W) {
    console.log("unsafe");
  } else {
    console.log("safe");
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
