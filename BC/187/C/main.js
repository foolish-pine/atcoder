const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  const set = new Set();
  for (let i = 1; i <= N; i++) {
    set.add(input[i]);
  }

  for (let item of set) {
    if (set.has(`!${item}`)) {
      console.log(item);
      return;
    }
  }
  console.log("satisfiable");
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
