n = int(input())
an = list(map(int, input().split()))

an.sort(reverse=True)
ans = 0
for i in range(0, len(an)):
    ans += (len(an) - 1 - 2*i) * an[i]

print(ans)
