const main = (args) => {
  const input = args.trim().split("\r\n");
  const A = Number(input[0].split(" ")[0])
  const B = Number(input[0].split(" ")[1])
  const C = Number(input[0].split(" ")[2])

  if (A**2 + B**2 < C**2) {
    console.log("Yes")
  }else {
    console.log("No")
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
