const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  const arrN = [];
  const arrA = input[1].split(" ").map((num) => Number(num));
  const arrB = input[2].split(" ").map((num) => Number(num));
  const arrBMax = Math.max(...arrB);

  for (let i = 1; i <= arrBMax; i++) {
    arrN.push(i);
  }

  let result = [...arrN];
  for (let i = 0; i < N; i++) {
    result = result.filter((num) => arrA[i] <= num && num <= arrB[i]);
  }

  console.log(result.length);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
