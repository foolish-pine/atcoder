n = int(input())
an = list(map(int, input().split()))

i = 1
ans = 0
for item in an:
    if (item == i):
        i += 1
    else:
        ans += 1

if (ans == n):
    print(-1)
else:
    print(ans)
