const main = (args) => {
  const input = args.trim().split("\n");
  const inputArr = input.split("");
  const firstChar = inputArr.shift();
  inputArr.push(firstChar);
  const result = inputArr.join("");
  console.log(result);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
