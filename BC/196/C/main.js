const main = (args) => {
  const input = args.trim().split("\r\n");
  const num = input[0];
  const digit = num.length;
  let count = 0;

  if (digit % 2 === 0) {
    count += (10 ** (digit / 2 - 1)) - 1;
    for (let i = 10 ** (digit - 1); i <= num; i++) {
    const digit = String(i).length;
    if (digit % 2 === 0) {
      const head = String(i).slice(0, digit / 2);
      const tail = String(i).slice(digit / 2);
      if (head === tail) {
        count++;
      }
    }
  }
  } else {
    count += (10 ** (digit - 2)) - 1;
  }
  console.log(count);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
