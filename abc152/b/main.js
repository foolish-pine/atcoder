const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);

  console.log(
    [new Array(b).fill(a).join(""), new Array(a).fill(b).join("")].sort()[0]
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
