const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (String(i).split("").includes("7")) continue;
    const octal = i.toString(8);
    if (!octal.split("").includes("7")) count++;
  }
  console.log(count);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
