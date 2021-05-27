const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const M = Number(input[0].split(" ")[1]);
  const T = Number(input[0].split(" ")[2]);

  let charge = N;
  for (let i = 1; i <= M; i++) {
    if (i === 1) {
      const A1 = Number(input[i].split(" ")[0]);
      const B1 = Number(input[i].split(" ")[1]);
      charge -= A1;
      if (charge <= 0) {
        console.log("No");
        return;
      }
      charge += B1 - A1;
      if (charge > N) charge = N;
    } else if (i === M) {
      const A1 = Number(input[i - 1].split(" ")[0]);
      const B1 = Number(input[i - 1].split(" ")[1]);
      const A2 = Number(input[i].split(" ")[0]);
      const B2 = Number(input[i].split(" ")[1]);
      charge -= A2 - B1;
      if (charge <= 0) {
        console.log("No");
        return;
      }
      charge += B2 - A2;
      charge -= T - B2;
      if (charge <= 0) {
        console.log("No");
        return;
      }
    } else {
      const A1 = Number(input[i - 1].split(" ")[0]);
      const B1 = Number(input[i - 1].split(" ")[1]);
      const A2 = Number(input[i].split(" ")[0]);
      const B2 = Number(input[i].split(" ")[1]);
      charge -= A2 - B1;
      if (charge <= 0) {
        console.log("No");
        return;
      }
      charge += B2 - A2;
    }
  }
  charge > 0 ? console.log("Yes") : console.log("No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
