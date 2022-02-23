n, m, t = map(int, input().split())

total = n
prev_t = 0
for i in range(m):
    a, b = map(int, input().split())
    total -= (a-prev_t)
    if total <= 0:
        print("No")
        exit(0)
    total += (b-a)
    total = min(total, n)
    prev_t = b
total -= (t-prev_t)

print("Yes" if total > 0 else "No")
