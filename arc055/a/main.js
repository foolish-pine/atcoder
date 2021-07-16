const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  console.log(
    "1" +
      Array(n - 1)
        .fill(0)
        .join("") +
      "7"
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
