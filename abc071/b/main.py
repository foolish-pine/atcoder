s = input()

alphabets = "abcdefghijklmnopqrstuvwxyz"
for c in alphabets:
    if(s.find(c) == -1):
        print(c)
        exit(0)

print("None")
