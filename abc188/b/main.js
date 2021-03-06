const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  const A = input[1].split(" ").map((number) => Number(number));
  const B = input[2].split(" ").map((number) => Number(number));

  let result = 0;
  for (let i = 0; i < N; i++) {
    result += A[i] * B[i];
  }
  if (result === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
