score = 0
for i in range(3):
  s1,s2 = map(int, input().split())
  score += s1 * s2 / 10


print(int(score))
