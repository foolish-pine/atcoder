const main = (args) => {
  const input = args.trim().split("\n");
  const arr = input[1]
    .split(" ")
    .map((n) => Number(n))
    .filter((n) => n % 2 === 0);

  console.log(
    arr.every((n) => n % 3 === 0 || n % 5 === 0) ? "APPROVED" : "DENIED"
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
