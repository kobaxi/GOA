def avg(num2):
    if not num2:
        print("სია ცარიელია.")
    else:
        total = sum(num2)
        avgg = total / len(num2)
        print("საშუალო:", avgg)

nl = [1, 2, 3, 4, 5]
avg(nl)