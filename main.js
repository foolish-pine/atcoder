const main = (args) => {
  const input = args.trim().split("\r\n");
  console.log(input);
};

main(require("fs").readFileSync("test.txt", "utf8"));
