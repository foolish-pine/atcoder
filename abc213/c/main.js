const main = (args) => {
  const input = args.trim().split("\n");
  const [h, w, n] = input[0].split(" ").map((n) => Number(n));

  const cn = [];
  for (let i = 1; i <= n; i++) {
    cn.push([
      i,
      Number(input[i].split(" ")[0]),
      Number(input[i].split(" ")[1]),
    ]);
  }

  const copyMatrix = (base) => {
    const result = [];
    for (const line of base) {
      result.push([...line]);
    }
    return result;
  };

  const copy = copyMatrix(cn);
  copy.sort((a, b) => a[1] - b[1]);

  let deletedH = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      deletedH = copy[0][1] - 1;
    } else {
      deletedH = deletedH + copy[i][1] - copy[i - 1][1] - 1;
    }
    cn[i][1] -= deletedH;
  }

  copy.sort((a, b) => a[2] - b[2]);
  let deletedW = 0;
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      deletedW = copy[0][2] - 1;
    } else {
      deletedW = deletedW + copy[i][2] - copy[i - 1][2] - 1;
    }
    cn[i][2] -= deletedW;
  }
  cn.sort((a, b) => a[0] - b[0]);
  cn.forEach((n) => {
    console.log(n[1] + " " + n[2]);
  });
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
