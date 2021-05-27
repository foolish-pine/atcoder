const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);

  for (let i = 1; i <= N - 2; i++) {
    const A = input[i].split(" ");
    const B = input[i + 1].split(" ");
    const C = input[i + 2].split(" ");

    if (A[0] === A[1] && B[0] === B[1] && C[0] === C[1]) {
      console.log("Yes");
      return;
    }
  }
  console.log("No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
