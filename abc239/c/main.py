x1, y1, x2, y2 = map(int, input().split())

point_list = [
    [x1+1, y1+2],
    [x1+1, y1-2],
    [x1+2, y1+1],
    [x1+2, y1-1],
    [x1-1, y1+2],
    [x1-1, y1-2],
    [x1-2, y1+1],
    [x1-2, y1-1]
]
for a_b in point_list:
    a, b = a_b
    if x2**2-2*a*x2+a**2+y2**2-2*b*y2+b**2-5 == 0:
        print("Yes")
        exit(0)
print("No")
