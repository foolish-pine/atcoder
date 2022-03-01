a, b, x = map(int, input().split())

left_num = 0
right_num = 10**9+1
while left_num+1 != right_num:
    center_num = (right_num+left_num)//2
    center_num_price = a*center_num+b*len(str(center_num))

    if center_num_price <= x:
        left_num = center_num
    else:
        right_num = center_num
print(left_num)
