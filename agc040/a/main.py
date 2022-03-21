s = input()
n = len(s)+1
count = [0] * (len(s) + 1)

for i in range(n-1):
    if s[i] == "<":
        count[i+1] = count[i]+1

for i in range(n-2, -1, -1):
    if s[i] == ">":
        count[i] = max(count[i], count[i+1]+1)

print(sum(count))
