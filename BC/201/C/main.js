const main = (args) => {
  const input = args.trim().split("\n");
  const S = input[0];
  const essentialNumberNum = S.split("").filter((s) => s === "o").length;

  if (essentialNumberNum > 4) {
    console.log(0);
    return;
  }

  let count = 0;
  for (let i = 0; i < 10000; i++) {
    const essentialNumberSet = new Set();
    const n = String(i).padStart(4, "0");

    for (let j = 0; j < 4; j++) {
      const digit = n[j];

      if (S[Number(digit)] === "o") {
        essentialNumberSet.add(Number(digit));
      } else if (S[Number(digit)] === "x") {
        break;
      }
      if (j === 3 && essentialNumberNum === essentialNumberSet.size) {
        count++;
      }
    }
  }
  console.log(count);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
