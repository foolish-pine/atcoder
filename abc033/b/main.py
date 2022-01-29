towns = {}
for i in range(int(input())):
    key, value = input().split()
    towns[key] = int(value)
if max(towns.values()) > sum(towns.values()) / 2:
    print(max(towns, key=towns.get))
else:
    print("atcoder")
