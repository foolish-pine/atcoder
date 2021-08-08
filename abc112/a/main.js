const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  if (n === 1) {
    console.log("Hello World");
  } else {
    console.log(Number(input[1]) + Number(input[2]));
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
