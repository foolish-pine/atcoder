#!/usr/bin/env python3


from pickle import TRUE


def main():
    h, w = map(int, input().split())
    squares = [list(input()) for _ in range(h)]

    i = 0
    j = 0
    vis = [[False] * w for _ in range(h)]
    while TRUE:
        if vis[i][j]:
            print(-1)
            exit()
        vis[i][j] = TRUE
        if squares[i][j] == "U" and i != 0:
            i -= 1
        elif squares[i][j] == "D" and i != h - 1:
            i += 1
        elif squares[i][j] == "R" and j != w - 1:
            j += 1
        elif squares[i][j] == "L" and j != 0:
            j -= 1
        else:
            break

    print(i + 1, j + 1)


main()
