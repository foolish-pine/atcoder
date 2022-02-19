n, m = map(int, input().split())
a_b = [list(map(int, input().split())) for i in range(n)]

sorted_a_b = sorted(a_b, key=lambda x: x[0])

ans = 0
for a_b in sorted_a_b:
    a, b = a_b
    if b <= m:
        ans += a*b
        m -= b
    else:
        ans += a*m
        print(ans)
        exit(0)
print(ans)
