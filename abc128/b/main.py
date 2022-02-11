n = int(input())
t = []
for i in range(n):
    a, b = input().split()
    t.append([a, int(b), i+1])

t.sort()
t.sort(key=lambda x: (x[0], -x[1]))

for i in t:
    print(i[2])
