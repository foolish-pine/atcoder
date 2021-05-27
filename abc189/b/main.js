const main = (args) => {
  const input = args.trim().split("\n");
  const N = parseInt(input[0].split(" ")[0]);
  const X = parseInt(input[0].split(" ")[1]);
  let total = 0;

  for (let i = 1; i <= N; i++) {
    const volume = parseInt(input[i].split(" ")[0]);
    const alcohol = volume * parseInt(input[i].split(" ")[1]);
    total += alcohol;
    if (total > X * 100) {
      console.log(i);
      return;
    }
  }
  console.log("-1");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
