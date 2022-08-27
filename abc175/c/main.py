#!/usr/bin/env python3


def main():
    x, k, d = map(int, input().split())
    x = abs(x)

    if x >= k * d:
        print(x - k * d)
        exit()

    r = x % d
    k = k - x // d

    if k % 2 == 0:
        print(r)
    else:
        print(min(abs(r + d), abs(r - d)))


main()
