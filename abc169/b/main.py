n = int(input())
an = [int(i) for i in input().split()]

if 0 in an:
    print(0)
    exit(0)

ans = 1
for i in an:
    ans *= i
    if ans > 10**18:
        print(-1)
        exit(0)

print(ans)
