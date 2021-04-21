const main = (args) => {
  const input = args.trim().split("\r\n");
  const N = Number(input[0]);
  let cost = Infinity;

  for (let i = 1; i <= N; i++) {
    const A = Number(input[i].split(" ")[0]);
    const P = Number(input[i].split(" ")[1]);
    const X = Number(input[i].split(" ")[2]);

    if (X - A / 0.5 / 2 > 0) {
      cost = P < cost ? P : cost;
    }
  }

  if (isFinite(cost)) {
    console.log(cost);
  } else {
    console.log(-1);
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
