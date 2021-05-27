const main = (args) => {
  const input = args.trim().split("\n");
  const X = Number(input[0].split(" ")[0]);
  const N = Number(input[0].split(" ")[1]);

  if (N === 0) {
    console.log(X);
    return;
  }

  const list = new Set();

  input[1].split(" ").map((n) => {
    list.add(Number(n));
  });

  if (!list.has(X)) {
    console.log(X);
    return;
  }

  let x = X;
  let i = 1;
  let flag = false;
  while (!flag) {
    let a = x - i;
    let b = x + i;

    if (!list.has(a)) {
      console.log(a);
      flag = !flag;
      return;
    }

    if (!list.has(b)) {
      console.log(b);
      flag = !flag;
      return;
    }
    i++;
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
