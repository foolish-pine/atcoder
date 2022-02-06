n = int(input())
an = map(int, input().split())

s = [0, 360]
current = 0
for a in an:
    current = (current + a) % 360
    s.append(current)

s.sort()

ans = 0
for i in range(len(s)-1):
    ans = max(ans, s[i+1] - s[i])

print(ans)
