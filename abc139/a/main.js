const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];
  const t = input[1];

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) result++;
  }
  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
