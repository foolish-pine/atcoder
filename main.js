const main = (args) => {
  const input = args.trim().split("\r\n");
  console.log(input);
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("test.txt", "utf8"));
