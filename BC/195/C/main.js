const main = (args) => {
  const input = args.trim().split("\n");
  const N = input[0];
  const digitNum = N.length;

  let count = 0;
  if (digitNum < 6) {
    count += (Math.pow(10, 6) - 1 - Math.pow(10, 3)) * 1;
  }

  for (
    let i = Math.pow(10, Math.floor(digitNum / 3) * 3);
    i <= Number(N);
    i++
  ) {
    count += Math.floor(digitNum / 3);
  }
  console.log(count);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
