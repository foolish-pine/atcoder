const main = (args) => {
  const input = args.trim().split("\n");
  const S = input[0].split("");

  let T = [];
  let flipped = false;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === "R") {
      flipped = !flipped;
    } else {
      if (!flipped) {
        if (T[T.length - 1] === S[i]) {
          T.pop();
        } else {
          T.push(S[i]);
        }
      } else {
        if (T[0] === S[i]) {
          T.shift();
        } else {
          T.unshift(S[i]);
        }
      }
    }
  }
  T = flipped ? T.reverse().join("") : T.join("");
  console.log(T);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
