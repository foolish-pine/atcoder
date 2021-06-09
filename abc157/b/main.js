const main = (args) => {
  const input = args.trim().split("\n");
  let bingo = [];

  for (let i = 0; i < 3; i++) {
    const row = input[i].split(" ");
    for (let j = 0; j < 3; j++) {
      bingo.push(Number(row[j]));
    }
  }

  const n = Number(input[3]);
  for (let i = 4; i < 4 + n; i++) {
    bingo = bingo.map((n) => {
      return n === Number(input[i]) ? 0 : n;
    });
  }

  if (
    (bingo[0] === bingo[1] && bingo[1] === bingo[2]) ||
    (bingo[3] === bingo[4] && bingo[4] === bingo[5]) ||
    (bingo[6] === bingo[7] && bingo[7] === bingo[8]) ||
    (bingo[0] === bingo[3] && bingo[3] === bingo[6]) ||
    (bingo[1] === bingo[4] && bingo[4] === bingo[7]) ||
    (bingo[2] === bingo[5] && bingo[5] === bingo[8]) ||
    (bingo[0] === bingo[4] && bingo[4] === bingo[8]) ||
    (bingo[2] === bingo[4] && bingo[4] === bingo[6])
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
