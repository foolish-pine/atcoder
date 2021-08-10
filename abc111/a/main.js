const main = (args) => {
  const input = args.trim().split("\n");
  const n = input[0];

  console.log(
    n
      .split("")
      .map((s) => (s === "1" ? "9" : "1"))
      .join("")
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
