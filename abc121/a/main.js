const main = (args) => {
  const input = args.trim().split("\n");
  const H = input[0].split(" ")[0];
  const W = input[0].split(" ")[1];
  const h = input[1].split(" ")[0];
  const w = input[1].split(" ")[1];

  console.log(H * W - h * W - (H - h) * w);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
