n = int(input())

digit = len(str(n))

sum = 0
for i in range(1, digit):
    m = 9*10**(i-1)
    sum += m*(m+1)//2

res = (n-10**(digit-1)+1)*(n-10**(digit-1)+2)//2

print((sum+res) % 998244353)
