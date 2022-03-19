import math

n = int(input())
pn = list(map(int, input().split()))
qn = list(map(int, input().split()))

pn_pos = 1
for i in range(len(pn)):
    prev_num = len(list(filter(lambda x: x < pn[i], pn[i+1:])))
    pn_pos += prev_num*math.factorial((n-1-i))

qn_pos = 1
for i in range(len(qn)):
    prev_num = len(list(filter(lambda x: x < qn[i], qn[i+1:])))
    qn_pos += prev_num*math.factorial((n-1-i))

print(abs(pn_pos-qn_pos))
