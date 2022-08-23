#!/usr/bin/env python3


def main():
    n = int(input())
    an = list(map(int, input().split()))

    same = 0
    for i, a in enumerate(an):
        if a == i + 1:
            same += 1

    ans = same * (same - 1) // 2

    for i, j in enumerate(an):
        if i + 1 < j and an[j - 1] == i + 1:
            ans += 1

    print(ans)


main()
