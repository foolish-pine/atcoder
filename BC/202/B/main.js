const main = (args) => {
  const input = args.trim().split("\n");
  const S = input[0];

  const reverse = S.split("")
    .reverse()
    .map((s) => {
      if (s === "6") {
        return "9";
      } else if (s === "9") {
        return "6";
      } else {
        return s;
      }
    })
    .join("");

  console.log(reverse);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
