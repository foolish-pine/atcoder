const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  const obj = {};
  for (let i = 1; i <= N; i++) {
    obj[input[i].split(" ")[1]] = input[i].split(" ")[0];
  }
  const key = Object.keys(obj).sort((a, b) => Number(b) - Number(a))[1];
  console.log(obj[key]);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
