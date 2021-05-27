const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const S = Number(input[0].split(" ")[1]);
  const D = Number(input[0].split(" ")[2]);

  for (let i = 1; i <= N; i++) {
    const X = Number(input[i].split(" ")[0]);
    const Y = Number(input[i].split(" ")[1]);

    if (X < S && D < Y) {
      console.log("Yes");
      return;
    }
  }
  console.log("No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
