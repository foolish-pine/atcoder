const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const K = Number(input[0].split(" ")[1]);

  const arr = [];
  for (let i = 1; i <= N; i++) {
    const A = BigInt(input[i].split(" ")[0]);
    const B = BigInt(input[i].split(" ")[1]);

    arr.push({ A, B });
  }

  let money = BigInt(K);
  arr.sort((a, b) => {
    if (a.A - b.A > 0) {
      return 1;
    } else if (a.A - b.A === 0) {
      return 0;
    } else if (a.A - b.A < 0) {
      return -1;
    }
  });
  arr.forEach((obj) => {
    if (obj.A > money) {
      return;
    }
    money += obj.B;
  });
  console.log(money.toString());
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
