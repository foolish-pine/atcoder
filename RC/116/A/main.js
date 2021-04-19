const main = (args) => {
  const findDivisor = (num) => {
    const divisors = [];
    for (let i = 1; i <= num / 2; i++) {
      divisors.push(i);
    }
    divisors.push(num);
    return divisors;
  };

  const input = args.trim().split("\r\n");
  const num = Number(input[0]);
  for (let i = 1; i <= num; i++) {
    const target = Number(input[i]);
    const divisors = findDivisor(target);
    if (
      divisors.filter((divisor) => divisor % 2 === 0).length >
      divisors.filter((divisor) => divisor % 2 === 1).length
    ) {
      console.log("Even");
    } else if (
      divisors.filter((divisor) => divisor % 2 === 0).length <
      divisors.filter((divisor) => divisor % 2 === 1).length
    ) {
      console.log("Odd");
    } else {
      console.log("Same");
    }
  }
};

// 提出時は以下を実行
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

// ローカルテスト時は以下を実行
main(require("fs").readFileSync("test.txt", "utf8"));
