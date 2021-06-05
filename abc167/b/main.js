const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);
  const c = Number(input[0].split(" ")[2]);
  const k = Number(input[0].split(" ")[3]);

  let rest = k;
  let result = 0;
  if (a <= rest) {
    result += a;
    rest -= a;
  } else {
    console.log(rest);
    return;
  }

  if (b <= rest) {
    rest -= b;
  } else {
    console.log(result);
    return;
  }

  if (c <= rest) {
    result -= c;
  } else {
    result -= rest;
    console.log(result);
    return;
  }

  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
