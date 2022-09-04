s = list(input())
one = int(s[0])
two = int(s[1])
three = int(s[2])
four = int(s[3])
five = int(s[4])
six = int(s[5])
seven = int(s[6])
eight = int(s[7])
nine = int(s[8])
ten = int(s[9])
if one == 1:
    print("No")
    exit()
if (
    (
        seven == 1
        and four == 0
        and (
            eight == 1
            or two == 1
            or five == 1
            or nine == 1
            or three == 1
            or six == 1
            or ten == 1
        )
    )
    or (
        (seven == 1 or four == 1)
        and (eight == 0 and two == 0)
        and (five == 1 or nine == 1 or three == 1 or six == 1 or ten == 1)
    )
    or (
        (seven == 1 or four == 1 or eight == 1 or two == 1)
        and five == 0
        and (nine == 1 or three == 1 or six == 1 or ten == 1)
    )
    or (
        (seven == 1 or four == 1 or eight == 1 or two == 1 or five == 1)
        and nine == 0
        and three == 0
        and (six == 1 or ten == 1)
    )
    or (
        (
            seven == 1
            or four == 1
            or eight == 1
            or two == 1
            or five == 1
            or nine == 1
            or three == 1
        )
        and six == 0
        and ten == 1
    )
):
    print("Yes")
else:
    print("No")
