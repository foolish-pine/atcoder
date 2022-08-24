#!/usr/bin/env python3


def main():
    n, k = map(int, input().split())

    an = [int(a) for a in input().split()]
    bn = [int(a) - 1 for a in input().split()]

    max_index = [_ for _, a in enumerate(an) if a == max(an)]

    for i in max_index:
        if i in bn:
            print("Yes")
            exit()

    print("No")


main()
