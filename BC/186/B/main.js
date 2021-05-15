const main = (args) => {
  const input = args.trim().split("\n");
  const H = Number(input[0].split(" ")[0]);
  const W = Number(input[0].split(" ")[1]);
  let arr = [];

  let least = Infinity;
  for (let i = 1; i <= H; i++) {
    const line = input[i].split(" ").map((n) => Number(n));
    arr = [...arr, ...line];
    for (let k = 0; k < W; k++) {
      if (line[k] < least) least = line[k];
    }
  }

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] - least;
  }

  console.log(result);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
