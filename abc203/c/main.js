const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const K = Number(input[0].split(" ")[1]);

  const obj = {};
  for (let i = 1; i <= N; i++) {
    const A = input[i].split(" ")[0];
    const B = BigInt(input[i].split(" ")[1]);

    obj[A] = obj[A] ? obj[A] + B : B;
  }

  let money = BigInt(K);
  let result = BigInt(0);
  const keys = Object.keys(obj).sort((a, b) => {
    if (BigInt(a) - BigInt(b) > BigInt(0)) {
      return 1;
    } else if (BigInt(a) - BigInt(b) === BigInt(0)) {
      return 0;
    } else if (BigInt(a) - BigInt(b) < BigInt(0)) {
      return -1;
    }
  });
  keys.forEach((key) => {
    if (result + money >= BigInt(key)) {
      money -= BigInt(key) - result;
      result += BigInt(key) - result;
      money += obj[key] ? obj[key] : BigInt(0);
    } else {
      return;
    }
  });
  console.log((result + money).toString());
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
