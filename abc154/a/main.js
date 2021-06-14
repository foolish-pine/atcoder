const main = (args) => {
  const input = args.trim().split("\n");

  if (input[2] === input[0].split(" ")[0]) {
    console.log(
      `${Number(input[1].split(" ")[0]) - 1} ${Number(input[1].split(" ")[1])}`
    );
  } else {
    console.log(
      `${Number(input[1].split(" ")[0])} ${Number(input[1].split(" ")[1]) - 1}`
    );
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
