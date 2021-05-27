const main = (args) => {
  const input = args.trim().split("\n");
  const A = input[0].split(" ")[0];
  const B = input[0].split(" ")[1];

  const sumA = A.split("").reduce((a, b) => Number(a) + Number(b));
  const sumB = B.split("").reduce((a, b) => Number(a) + Number(b));

  if (sumA >= sumB) {
    console.log(sumA);
  } else {
    console.log(sumB);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
