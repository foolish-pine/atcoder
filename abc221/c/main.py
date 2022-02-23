from itertools import permutations
N = list(input())

ans = 0
for n in permutations(N):
    for i in range(1, len(N)):
        s1 = n[:i]
        s2 = n[i:]
        a = ""
        b = ""
        for s in s1:
            a += s
        for s in s2:
            b += s
        ans = max(ans, int(a)*int(b))
print(ans)
