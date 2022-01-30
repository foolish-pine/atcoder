n, m = map(int, input().split())
s = list(input().split())
t = set(input().split())

for n in s:
    if n in t:
        print("Yes")
        t.remove(n)
    else:
        print("No")
