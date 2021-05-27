const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0]);
  let sum = 0;

  for (let i = 1; i <= N; i++) {
    const A = Number(input[i].split(" ")[0]);
    const B = Number(input[i].split(" ")[1]);

    if ((B - A) % 2 !== 0) {
      sum += ((A + B - 1) / 2) * (B - A) + B;
    } else {
      sum += ((A + B) / 2) * (B - A + 1);
    }
  }
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
