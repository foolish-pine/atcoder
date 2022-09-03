def main():
    n = int(input())
    an = list(map(int, input().split()))

    ans = 0
    for l in range(n):
        x = an[l]
        for r in range(l, n):
            x = min(x, an[r])
            ans = max(ans, x * (r - l + 1))

    print(ans)


main()
