const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);
  const k = Number(input[0].split(" ")[1]);
  const q = Number(input[0].split(" ")[2]);

  let an = Array(n).fill(k);
  for (let i = 1; i <= q; i++) {
    an = an.map((a, index) => {
      if (index + 1 !== Number(input[i])) {
        return a - 1;
      } else {
        return a;
      }
    });
  }
  an.forEach((a) => {
    if (a > 0) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  });
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
