const main = (args) => {
  const input = args.trim().split("\n");
  const s = input[0];

  if (s === "Sunny") {
    console.log("Cloudy");
  } else if (s === "Cloudy") {
    console.log("Rainy");
  } else {
    console.log("Sunny");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
