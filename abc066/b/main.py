s = input()

ans = len(s)
for i in range(len(s)):
    if i != 0 and i % 2 == 0:
        trunc_s = s[:len(s)-i]
        if trunc_s[len(trunc_s)//2:] == trunc_s[:len(trunc_s)//2]:
            print(len(trunc_s))
            exit(0)
