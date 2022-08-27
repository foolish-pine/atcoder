#!/usr/bin/env python3


def main():
    o = list(input())
    e = list(input())

    password = ""
    for i in range(len(o)):
        password += o[i]
        if i < len(e):
            password += e[i]

    print(password)


main()
