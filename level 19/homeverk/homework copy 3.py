def find_max():
    num = float(input("Enter your first number: "))
    num2 = float(input("Enter your second number: ")) 

    if num > num2:
        print(str(num) + "  is the highest")
    elif num < num2:
        print(str(num2) + "  is the highest")
    else:
        print(" equal")

find_max() 