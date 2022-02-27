n = int(input())

candidates = ["######", ".#####", "#.####", "##.###",
              "###.##", "####.#", "#####.", "..####", ".#.###", ".##.##", ".###.#", ".####.", "#..###", "#.#.##", "#.##.#", "#.###.", "##..##", "##.#.#", "##.##.", "###..#", "###.#.", "####.."]

pos_l = [list(input()) for i in range(n)]

rows = ["".join(pos_l[i]) for i in range(n)]
cols = []
for i in range(n):
    cols.append("")
    for j in range(n):
        cols[i] += pos_l[j][i]
obliques_1 = []
for i in range(0, n-5):
    for j in range(0, n-5):
        obliques_1.append("")
        for k in range(6):
            obliques_1[-1] += pos_l[i+k][j+k]
obliques_2 = []
for i in range(0, n-5):
    for j in range(5, n):
        obliques_2.append("")
        for k in range(6):
            obliques_2[-1] = pos_l[j-k][i+k] + obliques_2[-1]

for candidate in candidates:
    for row in rows:
        if candidate in row:
            print("Yes")
            exit(0)
    for col in cols:
        if candidate in col:
            print("Yes")
            exit(0)
    for oblique in obliques_1:
        if candidate in oblique:
            print("Yes")
            exit(0)
    for oblique in obliques_2:
        if candidate in oblique:
            print("Yes")
            exit(0)
print("No")
