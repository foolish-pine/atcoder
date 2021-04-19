const main = (args) => {
  const input = args.trim().split("\r\n");
  const num = input[0];
  const numReverse = Number(num.split("").reverse().join(""));
  if (numReverse === Number(String(numReverse).split("").reverse().join(""))) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
