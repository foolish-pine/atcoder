s = input()
count_zero = s.count("0")
count_one = s.count("1")

print(min(count_zero, count_one) * 2)
