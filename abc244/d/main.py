si = [s for s in input().split()]
ti = [t for t in input().split()]

same_count = 0
for i in range(3):
    if si[i] == ti[i]:
        same_count += 1

if same_count == 3:
    print("Yes")
elif same_count == 1:
    print("No")
else:
    print("Yes")
