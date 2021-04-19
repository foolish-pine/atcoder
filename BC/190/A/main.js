const main = (args) => {
  const input = args.trim().split("\r\n")[0].split(" ");
  const A = parseInt(input[0]);
  const B = parseInt(input[1]);
  const C = parseInt(input[2]);

  if (C === 0) {
    A > B ? console.log("Takahashi") : console.log("Aoki");
  } else {
    A < B ? console.log("Aoki") : console.log("Takahashi");
  }
};

// main(require("fs").readFileSync("/dev/stdin", "utf8"));
main(require("fs").readFileSync("test.txt", "utf8"));
