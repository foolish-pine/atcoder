const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  const A = input[1].split(" ").map((number) => Number(number));

  const B = {};
  for (let i = 0; i < A.length; i++) {
    const k = A[i] % 200;
    B[k] = B[k] ? ++B[k] : 1;
  }

  let result = 0;
  for (let i = 0; i < Object.keys(B).length; i++) {
    result += (B[Object.keys(B)[i]] * (B[Object.keys(B)[i]] - 1)) / 2;
  }
  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
