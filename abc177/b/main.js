const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];
  const t = input[1];

  let result = t.length;
  for (let i = 0; i <= s.length - t.length; i++) {
    let _result = 0;
    const str = s.slice(i, i + t.length);
    for (let j = 0; j < t.length; j++) {
      if (str[j] !== t[j]) _result++;
    }
    if (result > _result) result = _result;
  }
  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
