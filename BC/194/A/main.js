const main = (args) => {
  const input = args.trim().split("\r\n");
  const noFat = Number(input[0].split(" ")[0]);
  const fat = Number(input[0].split(" ")[1]);
  let type;

  if (noFat + fat >= 15 && fat >= 8) {
    type = 1;
  } else if (noFat + fat >= 10 && fat >= 3) {
    type = 2;
  } else if (noFat + fat >= 3) {
    type = 3;
  } else {
    type = 4;
  }

  console.log(type);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
