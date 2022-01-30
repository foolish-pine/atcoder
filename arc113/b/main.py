a, b, c = map(int, input().split())

'''
1 2 3 4 5 乗数
1 1 1 1 1
2 4 8 6 2
3 9 7 1 3
4 6 4 6 4
5 5 5 5 5
6 6 6 6 6
7 9 3 1 7
8 4 2 6 8
9 1 9 1 9
'''

r = pow(b, c, 4)
if r == 0:
    print(a**4 % 10)
else:
    print(a**r % 10)
