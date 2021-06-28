const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const s = input[1];

  console.log(
    s
      .split("")
      .map((c) => String.fromCharCode(65 + (((c.charCodeAt(0) + n) % 65) % 26)))
      .join("")
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
