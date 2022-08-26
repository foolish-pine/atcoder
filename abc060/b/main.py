#!/usr/bin/env python3


def main():
    a, b, c = map(int, input().split())

    i = 1
    l = []
    while True:
        sum = a * i
        if sum % b == c:
            print("YES")
            exit()
        else:
            if sum % b in l:
                print("NO")
                exit()
            else:
                l.append(sum % b)
                i += 1


main()
