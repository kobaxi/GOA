num1 = int(input("Enter a number: "))
num2 = int(input("Enter a number: "))
user_operator = input("Enter a mathematical operator: ")

if user_operator == "+":
    print(num1 + num2)
if user_operator == "-":
    print(num1 - num2)
if user_operator == "**":
    print(num1 ** num2)
if user_operator == "//":
    print(num1 // num2)