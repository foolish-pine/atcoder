import math
a, b, c, d = map(int, input().split())


def is_prime(n):
    if n == 1:
        return False

    for k in range(2, int(math.sqrt(n)) + 1):
        if n % k == 0:
            return False

    return True


for n in range(a, b+1):
    for m in range(c, d+1):
        if is_prime(n+m):
            break
        if m == d:
            print("Takahashi")
            exit(0)
print("Aoki")
