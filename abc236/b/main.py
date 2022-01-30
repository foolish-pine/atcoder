n = int(input())
a = list(input().split())

d = {}
for n in a:
    if n not in d:
        d[n] = 1
    else:
        d[n] += 1

print([k for k, v in d.items() if v == 3][0])
