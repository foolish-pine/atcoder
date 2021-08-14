const main = (args) => {
  const input = args.trim().split("\n");
  const c11 = input[0].split("")[0];
  const c22 = input[1].split("")[1];
  const c33 = input[2].split("")[2];

  console.log(c11 + c22 + c33);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
