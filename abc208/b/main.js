const main = (args) => {
  const input = args.trim().split("\n");
  const p = Number(input[0]);

  const factorial = (num) => {
    if (num < 2) return 1;
    return num * factorial(num - 1);
  };

  const coins = [];
  for (let i = 1; i <= 10; i++) {
    coins.push(factorial(i));
  }
  coins.sort((a, b) => b - a);
  let price = p;
  let sum = 0;
  coins.map((coin) => {
    sum += Math.floor(price / coin);
    price = price % coin;
  });
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
