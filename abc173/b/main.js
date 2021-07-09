const main = (args) => {
  const input = args.trim().split("\n");
  const n = Number(input[0]);

  const obj = {
    AC: 0,
    WA: 0,
    TLE: 0,
    RE: 0,
  };
  for (let i = 1; i <= n; i++) {
    const result = input[i];
    obj[result]++;
  }
  console.log(`AC x ${obj.AC}
WA x ${obj.WA}
TLE x ${obj.TLE}
RE x ${obj.RE}`);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
