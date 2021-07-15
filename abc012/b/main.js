const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  const h = String(Math.floor(n / 3600)).padStart(2, "0");
  const m = String(Math.floor((n % 3600) / 60)).padStart(2, "0");
  const s = String(Math.floor(n % 60)).padStart(2, "0");

  console.log(`${h}:${m}:${s}`);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
