const internal = require("stream");

const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0].split(" ")[0];
  const t = input[0].split(" ")[1];

  console.log(t + s);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
