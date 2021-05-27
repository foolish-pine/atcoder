const main = (args) => {
  const input = args.trim().split("\n");
  const A = Number(input[0].split(" ")[0]);
  const B = Number(input[0].split(" ")[1]);
  const C = Number(input[0].split(" ")[2]);
  const D = Number(input[0].split(" ")[3]);

  let takahashi = A;
  let aoki = C;
  while (takahashi > 0 && aoki > 0) {
    aoki -= B;
    if (aoki <= 0) {
      console.log("Yes");
      return;
    }
    takahashi -= D;
    if (takahashi <= 0) {
      console.log("No");
      return;
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
