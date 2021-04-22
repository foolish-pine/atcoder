const main = (args) => {
  const input = args.trim().split("\r\n");
  const V = Number(input[0].split(" ")[0]);
  const T = Number(input[0].split(" ")[1]);
  const S = Number(input[0].split(" ")[2]);
  const D = Number(input[0].split(" ")[3]);

  if (D / V >= T && D / V <= S) {
    console.log("No");
  } else {
    console.log("Yes");
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
