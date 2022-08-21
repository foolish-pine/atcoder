#!/usr/bin/env python3


def main():
    r, c = map(int, input().split())
    distance = max(abs(r - 8), abs(c - 8))
    if distance % 2 == 0:
        print("white")
    else:
        print("black")


main()
