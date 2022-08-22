#!/usr/bin/env python3


def main():
    n, m, t = map(int, input().split())
    an = [0] + list(map(int, input().split()))
    bonus = [0] * n

    for _ in range(m):
        x, y = map(int, input().split())
        bonus[x - 1] = y

    for i in range(1, n):
        if t <= an[i]:
            print("No")
            exit()
        t -= an[i]
        t += bonus[i]
    print("Yes")


main()
