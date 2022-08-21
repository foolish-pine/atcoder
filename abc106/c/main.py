#!/usr/bin/env python3


def main():
    s = list(input())
    k = int(input())

    one_count = 0

    for d in s:
        if d == "1":
            one_count += 1
        else:
            break

    if k <= one_count:
        print(1)
    else:
        print(s[one_count])


main()
