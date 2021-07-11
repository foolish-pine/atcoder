const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);

  let socket = 1;
  let tap = 0;
  while (socket < b) {
    socket += a - 1;
    tap++;
  }
  console.log(tap);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
