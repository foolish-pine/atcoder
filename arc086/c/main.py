import collections

n, k = map(int, input().split())
an = list(map(int, input().split()))

dic = collections.Counter(an)
sorted_dic = sorted(dic.items(), key=lambda x: x[1])
ans = 0

for item in sorted_dic:
    an_set_len = len(set(sorted_dic))
    if an_set_len <= k:
        print(ans)
        exit(0)
    else:
        ans += item[1]
        sorted_dic.remove(item)

print(ans)
