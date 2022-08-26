#!/usr/bin/env python3


def main():
    n = int(input())
    an = map(int, input().split())

    ans = 0
    for a in an:
        ans += a - 1

    print(ans)


main()
