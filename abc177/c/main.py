n = int(input())
a_list = [int(n) for n in input().split()]

b = 0
ans = 0
for i in range(1, len(a_list)):
    b += a_list[i-1]
    ans += b*a_list[i]

print(ans % (10**9+7))
