const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  const arr = input[1].split(" ").map((n) => Number(n));

  let step = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] > arr[i + 1]) {
      step += arr[i] - arr[i + 1];
      arr[i + 1] += arr[i] - arr[i + 1];
    }
  }
  console.log(step);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
