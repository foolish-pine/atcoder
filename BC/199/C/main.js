const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  let S = input[1];
  let SArr = S.split("");
  const Q = Number(input[2]);
  let isFlipped = false;

  for (let i = 3; i < 3 + Q; i++) {
    const T = Number(input[i].split(" ")[0]);

    if (T === 1) {
      const A = Number(input[i].split(" ")[1]);
      const B = Number(input[i].split(" ")[2]);

      if (!isFlipped) {
        const chrA = SArr[A - 1];
        const chrB = SArr[B - 1];
        SArr[A - 1] = chrB;
        SArr[B - 1] = chrA;
      } else {
        const posA = A <= N ? A - 1 + N : A - 1 - N;
        const posB = B <= N ? B - 1 + N : B - 1 - N;
        const chrA = SArr[posA];
        const chrB = SArr[posB];
        SArr[posA] = chrB;
        SArr[posB] = chrA;
      }
    }

    if (T === 2) {
      isFlipped = !isFlipped;
    }
  }

  if (isFlipped) {
    const strHead = SArr.slice(0, N);
    const strTail = SArr.slice(N);
    SArr = [...strTail, ...strHead];
  }
  console.log(SArr.join(""));
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
