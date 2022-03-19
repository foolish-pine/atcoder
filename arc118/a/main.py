import math

t, n = map(int, input().split())

print(math.ceil(n*100/t)+n-1)
