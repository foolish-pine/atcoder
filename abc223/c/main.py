n = int(input())
a_b_list = [list(map(int, input().split())) for i in range(n)]

total_time = 0
for a_b in a_b_list:
    a, b = a_b
    total_time += a/b

remain_time = total_time / 2
ans = 0
for a_b in a_b_list:
    a, b = a_b
    if a/b <= remain_time:
        remain_time -= a/b
        ans += a
    else:
        ans += b*remain_time
        print(ans)
        exit(0)

print(ans)
