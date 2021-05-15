const main = (args) => {
  const input = args.trim().split("\n");
  const S = input[0];

  const o = S.split("").filter((s) => s === "o").length;
  const x = S.split("").filter((s) => s === "x").length;
  const q = S.split("").filter((s) => s === "?").length;

  if (o > 4 || x === 10) {
    console.log(0);
    return;
  }

  let result = 0;
  if (o === 0) {
    result += Math.pow(q, 4);
  }
  if (o === 1) {
    result += 1;
    result += 4 * q;
    result += 6 * Math.pow(q, 2);
    result += 4 * Math.pow(q, 3);
  }
  if (o === 2) {
    result += 8;
    result += 2 * 6 * 2 * q;
    result += 2 * 6 * Math.pow(q, 2);
  }
  if (o === 3) {
    result += 6 * 4 * q;
    result += 6 * 2 * 3;
  }
  if (o === 4) {
    result += 24;
  }
  console.log(result);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
