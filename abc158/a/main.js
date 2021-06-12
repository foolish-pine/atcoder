const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];

  console.log(
    s.split("").indexOf("A") !== -1 && s.split("").indexOf("B") !== -1
      ? "Yes"
      : "No"
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
