v, a, b, c = map(int, input().split())

total = a+b+c
rem = v % total

if rem-a < 0:
    print("F")
elif rem-a-b < 0:
    print("M")
elif rem-a-b-c < 0:
    print("T")
