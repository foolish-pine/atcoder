const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  let str = input[1];
  let strArr = str.split("");
  const Q = Number(input[2]);

  for (let i = 3; i < 3 + Q; i++) {
    const T = Number(input[i].split(" ")[0]);

    if (T === 1) {
      const A = Number(input[i].split(" ")[1]);
      const B = Number(input[i].split(" ")[2]);
      const chrA = strArr[A - 1];
      const chrB = strArr[B - 1];
      strArr[A - 1] = chrB;
      strArr[B - 1] = chrA;
    }

    if (T === 2) {
      const strHead = strArr.slice(0, N);
      const strTail = strArr.slice(N);
      strArr = [...strTail, ...strHead];
    }
  }
  console.log(strArr.join(""));
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
