n = input()
digits = [int(d) for d in n]

digits.reverse()

ans = 0
borrow = False
for i, d in enumerate(digits):
    if borrow and d >= 1:
        d -= 1
        borrow = False
    elif borrow and d == 0:
        d = 9

    if (d == 9 and i != len(digits)-1):
        ans += 9
    elif (d != 9 and i != len(digits)-1):
        ans += 9
        borrow = True
    else:
        ans += d
print(ans)
