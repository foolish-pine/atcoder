const main = (args) => {
  const input = args.trim().split("\n");
  const k = Number(input[0]);
  const a = Number(input[1].split(" ")[0]);
  const b = Number(input[1].split(" ")[1]);

  for (let i = a; i <= b; i++) {
    if (i % k === 0) {
      console.log("OK");
      return;
    }
  }
  console.log("NG");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
