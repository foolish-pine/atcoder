const main = (args) => {
  const input = args.trim().split("\n");
  const N = input[0];
  const digitNum = N.length;

  let count = 0;
  if (digitNum > 6) {
    count += (Math.pow(10, 6) - 1 - Math.pow(10, 3)) * 1;
  }
  if (digitNum > 9) {
    count += (Math.pow(10, 9) - 1 - Math.pow(10, 6)) * 2;
  }
  if (digitNum > 12) {
    count += (Math.pow(10, 12) - 1 - Math.pow(10, 9)) * 3;
  }

  if (digitNum === 15) {
    count += 5;
  }

  count += Number(N) - Math.pow(10, (Math.ceil(digitNum / 3) - 1) * 3) + 1;

  console.log(count);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
