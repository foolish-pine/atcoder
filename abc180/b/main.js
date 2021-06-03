const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);
  const nums = input[1].split(" ").map((n) => Number(n));
  const c = nums.map((n) => Math.abs(n)).reduce((a, b) => (a > b ? a : b));

  let m = 0;
  let e = 0;
  for (let i = 0; i < n; i++) {
    m += Math.abs(nums[i]);
    e += nums[i] ** 2;
  }
  console.log(m);
  console.log(Math.sqrt(e));
  console.log(c);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
