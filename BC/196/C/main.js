const main = (args) => {
  const input = args.trim().split("\r\n");
  const N = input[0];
  const digit = N.length;
  let count = 0;

  if (digit === 1) {
    console.log(0);
    return;
  }

  if (digit === 2) {
    for (let i = 1; i <= Number(N); i++) {
      if (String(i)[0] === String(i)[1]) count++;
    }
    console.log(count);
    return;
  }

  if (digit % 2 !== 0) {
    for (let i = 1; i <= digit - 1; i++) {
      count += 9 * Math.pow(10, i - 1);
    }
  }

  if (digit % 2 === 0) {
    for (let i = 1; i <= digit / 2 - 1; i++) {
      count += 9 * Math.pow(10, i - 1);
    }
    const max =
      Number(N.slice(0, digit / 2)) <= Number(N.slice(2, digit))
        ? Number(N.slice(0, digit / 2))
        : Number(N.slice(2, digit));
    for (let i = Math.pow(10, digit / 2 - 1); i <= max; i++) {
      count++;
    }
  }

  console.log(count);
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
