const main = (args) => {
  const input = args.trim().split("\n");
  const D = Number(input[0].split(" ")[0]);
  const T = Number(input[0].split(" ")[1]);
  const S = Number(input[0].split(" ")[2]);

  if (D / S <= T) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
