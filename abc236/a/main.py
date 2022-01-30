s = input()
a, b = map(int, input().split())

s_l = list(s)
s_a = s_l[a-1]
s_b = s_l[b-1]

s_l[a-1] = s_b
s_l[b-1] = s_a

print(''.join(s_l))
