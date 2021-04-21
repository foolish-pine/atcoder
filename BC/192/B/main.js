const main = (args) => {
  const input = args.trim().split("\r\n")[0];
  for (let i = 0; i < input.length; i++) {
    if ((i + 1) % 2 !== 0 && input[i].match(/[A-Z]/)) {
      console.log("No");
      return;
    }
    if ((i + 1) % 2 === 0 && input[i].match(/[a-z]/)) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
