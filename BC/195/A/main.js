const main = (args) => {
  const input = args.trim().split("\r\n");
  const M = Number(input[0].split(" ")[0]);
  const H = Number(input[0].split(" ")[1]);
  if (H % M === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
