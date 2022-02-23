h, w = map(int, input().split())

mines = []
for row_index in range(h):
    mines.append(list(input()))

ans = []
for row_index, row in enumerate(mines):
    ans_row = []
    for col_index, col in enumerate(row):
        if col == "#":
            ans_row.append("#")
        else:
            y_l = list(filter(lambda x: x >= 0 and x < h, [
                       row_index-1, row_index, row_index+1]))
            x_l = list(filter(lambda x: x >= 0 and x < w, [
                       col_index-1, col_index, col_index+1]))
            count = 0
            for y in y_l:
                for x in x_l:
                    if mines[y][x] == "#":
                        count += 1
            ans_row.append(count)
    ans.append(ans_row)


for row in ans:
    text = ""
    for col in row:
        text += str(col)
    print(text)
