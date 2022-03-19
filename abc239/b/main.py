n = int(input())
an = list(map(int, (input().split())))
bn = list(map(int, (input().split())))

ans1 = 0
ans2 = 0

for i, a in enumerate(an):
    if(an[i] == bn[i]):
        ans1 += 1
    elif a in bn:
        ans2 += 1

print(ans1)
print(ans2)
