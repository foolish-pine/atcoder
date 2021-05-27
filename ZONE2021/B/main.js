const main = (args) => {
  const input = args.trim().split("\n");
  const N = Number(input[0].split(" ")[0]);
  const D = Number(input[0].split(" ")[1]);
  const H = Number(input[0].split(" ")[2]);

  let a = H / D;
  for (let i = 1; i <= N; i++) {
    const d = Number(input[i].split(" ")[0]);
    const h = Number(input[i].split(" ")[1]);

    const tilt = (H - h) / (D - d);
    if (a > tilt) a = tilt;
  }
  if (a === 1) {
    console.log(0);
  } else {
    const b = H - a * D;
    console.log(b);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
