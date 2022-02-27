n, m = map(int, input().split())
an = [int(n) for n in input().split()]
bn = [int(n) for n in input().split()]
an.sort()
bn.sort()

for b in bn:
    if b in an:
        an.remove(b)
    else:
        print("No")
        exit(0)

print("Yes")
