s = input()
sLength = len(s)
ans1_string = ""
ans2_string = ""

for i in range(sLength):
    if i % 2 == 0:
        ans1_string += "0"
    else:
        ans1_string += "1"

for i in range(sLength):
    if i % 2 == 0:
        ans2_string += "1"
    else:
        ans2_string += "0"

ans1_count = 0
for i in range(sLength):
    if s[i] == ans1_string[i]:
        ans1_count += 1

ans2_count = 0
for i in range(sLength):
    if s[i] == ans2_string[i]:
        ans2_count += 1

print(min(ans1_count, ans2_count))
