const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0].split(" ")[0]);

  const arr = [];
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      arr.push(i * j);
    }
  }

  console.log(arr.indexOf(n) > -1 ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
