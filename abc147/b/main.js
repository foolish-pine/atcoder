const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];

  let count = 0;
  if (s.length % 2 === 0) {
    for (let i = 0; i < s.length / 2; i++) {
      if (s[i] !== s[s.length - 1 - i]) count++;
    }
  } else {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
      if (s[i] !== s[s.length - 1 - i]) count++;
    }
  }
  console.log(count);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
