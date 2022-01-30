h = int(input())
ans = 0

i = 1
while h > 0:
    ans += 2**(i-1)
    h = int(h/2)
    i += 1
print(ans)
