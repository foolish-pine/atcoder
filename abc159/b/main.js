const main = (args) => {
  const input = args.trim().split("\n");
  const S = input[0];

  console.log(
    S === S.split("").reverse().join("") &&
      S.slice(0, (S.length - 1) / 2) ===
        S.slice(0, (S.length - 1) / 2)
          .split("")
          .reverse()
          .join("") &&
      S.slice((S.length + 3) / 2 - 1) ===
        S.slice((S.length + 3) / 2 - 1)
          .split("")
          .reverse()
          .join("")
      ? "Yes"
      : "No"
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
