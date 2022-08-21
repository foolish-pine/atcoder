#!/usr/bin/env python3
#


def main():
    # 貪欲法
    n, k = map(int, input().split())
    an = list(input().split())
    dict = {}

    for a in an:
        if a in dict:
            dict[a] += 1
        else:
            dict[a] = 1
    number_count = len(dict)
    dict_sorted = sorted(dict.items(), key=lambda x: x[1])

    i = 0
    answer = 0
    while number_count > k:
        number_count -= 1
        answer += dict_sorted[i][1]
        i += 1

    print(answer)


main()
