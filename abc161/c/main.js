const main = (args) => {
  const input = args.trim().split("\n");
  const N = BigInt(input[0].split(" ")[0]);
  const K = BigInt(input[0].split(" ")[1]);

  console.log(
    N % K <= K - (N % K) ? (N % K).toString() : (K - (N % K)).toString()
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
