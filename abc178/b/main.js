const main = (args) => {
  const input = args.trim().split("\n");
  const a = BigInt(input[0].split(" ")[0]);
  const b = BigInt(input[0].split(" ")[1]);
  const c = BigInt(input[0].split(" ")[2]);
  const d = BigInt(input[0].split(" ")[3]);

  let x = a * c <= a * d ? a * d : a * c;
  let y = b * c <= b * d ? b * d : b * c;
  let z = x <= y ? y : x;
  console.log(z.toString());
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
