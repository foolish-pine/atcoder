#!/usr/bin/env python3


def main():
    n = int(input())
    s = set()

    for _ in range(n):
        x = input()
        if x in s:
            s.discard(x)
        else:
            s.add(x)

    print(len(s))


main()
