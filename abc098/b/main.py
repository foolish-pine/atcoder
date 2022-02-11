n = int(input())
s = input()

ans = 0
for i in range(1, n):
    s1 = s[:i]
    s2 = s[i:]
    set1 = set(list(s1))
    set2 = set(list(s2))
    set3 = set1 & set2

    ans = max(ans, len(set3))

print(ans)
