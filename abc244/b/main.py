n = int(input())
t = input()

x = 0
y = 0
direction = "e"
for i in range(n):
    if (t[i] == "S"):
        if (direction == "n"):
            y += 1
        elif(direction == "e"):
            x += 1
        elif(direction == "s"):
            y -= 1
        else:
            x -= 1
    else:
        if (direction == "n"):
            direction = "e"
        elif(direction == "e"):
            direction = "s"
        elif(direction == "s"):
            direction = "w"
        else:
            direction = "n"

print(x, y)
