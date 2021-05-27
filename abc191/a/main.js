const main = (args) => {
  const input = args.trim().split("\n");
  const V = Number(input[0].split(" ")[0]);
  const T = Number(input[0].split(" ")[1]);
  const S = Number(input[0].split(" ")[2]);
  const D = Number(input[0].split(" ")[3]);

  if (D / V >= T && D / V <= S) {
    console.log("No");
  } else {
    console.log("Yes");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
