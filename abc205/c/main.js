const main = (args) => {
  const input = args.trim().split("\n");
  const a = Number(input[0].split(" ")[0]);
  const b = Number(input[0].split(" ")[1]);
  const c = Number(input[0].split(" ")[2]);

  const aIsPositive = a > 0;
  const bIsPositive = b > 0;
  const cIsEven = c % 2 === 0;

  if (cIsEven) {
    if (Math.abs(a) > Math.abs(b)) {
      console.log(">");
    } else if (Math.abs(a) < Math.abs(b)) {
      console.log("<");
    } else {
      console.log("=");
    }
  } else {
    if (aIsPositive && bIsPositive) {
      if (Math.abs(a) > Math.abs(b)) {
        console.log(">");
      } else if (Math.abs(a) < Math.abs(b)) {
        console.log("<");
      } else {
        console.log("=");
      }
    } else if (!aIsPositive && bIsPositive) {
      console.log("<");
    } else if (aIsPositive && !bIsPositive) {
      console.log(">");
    } else {
      if (Math.abs(a) > Math.abs(b)) {
        console.log("<");
      } else if (Math.abs(a) < Math.abs(b)) {
        console.log(">");
      } else {
        console.log("=");
      }
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
