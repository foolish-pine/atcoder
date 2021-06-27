const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];
  const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  console.log(7 - arr.indexOf(s));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
