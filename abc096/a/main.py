#!/usr/bin/env python3

def main():
    a, b = map(int, input().split())
    print(a if a <= b else a - 1)


main()
