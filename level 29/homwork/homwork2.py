


# Variables

x = input("Enter a value for x: ")
print(f"The value of x is {x}")


name = input("Enter your name: ")
print(f"Hello, {name}!")

age = input("Enter your age: ")
print(f"You are {age} years old.")
# Variable Data Types

x = int(input("Enter an integer: "))
print(f"The integer value is {x}, and its type is {type(x)}")


y = float(input("Enter a float value: "))
print(f"The float value is {y}, and its type is {type(y)}")


name = input("Enter your name: ")
print(f"Hello, {name}, and its type is {type(name)}")


is_active = input("Are you active? (yes/no): ").lower() == "yes"
print(f"The value of is_active is {is_active}, and its type is {type(is_active)}")
# Input

name = input("Please enter your name: ")
print(f"Your name is {name}")


age = int(input("Please enter your age: "))
print(f"You are {age} years old.")


height = float(input("Enter your height in meters: "))
print(f"Your height is {height} meters.")
# Comparison Operators

x = int(input("Enter the first number: "))
y = int(input("Enter the second number: "))
print(f"Is {x} greater than {y}? {x > y}")

a = float(input("Enter the first float number: "))
b = float(input("Enter the second float number: "))
print(f"Are {a} and {b} equal? {a == b}")


x = int(input("Enter a number: "))
y = int(input("Enter another number: "))
print(f"Are {x} and {y} not equal? {x != y}")
# Logical Operators

x = int(input("Enter first number: "))
y = int(input("Enter second number: "))
print(f"Is {x} > 5 and {y} < 10? {x > 5 and y < 10}")


x = int(input("Enter first number: "))
y = int(input("Enter second number: "))
print(f"Is {x} < 10 or {y} > 20? {x < 10 or y > 20}")


x = int(input("Enter a number: "))
print(f"Is {x} not equal to 0? {not (x == 0)}")
# Loops

n = int(input("Enter a number: "))
for i in range(n):
    print(i)


start = int(input("Enter the start value: "))
end = int(input("Enter the end value: "))
step = int(input("Enter the step value: "))
for i in range(start, end, step):
    print(i)
n = int(input("Enter a number: "))
i = 0
while i < n:
    print(i)
    i += 1


number = int(input("Enter a positive number: "))
while number <= 0:
    print("Please enter a positive number.")
    number = int(input("Enter a positive number: "))
print(f"You entered {number}.")
# Conditional Statements

number = int(input("Enter a number: "))
if number > 0:
    print("The number is positive.")
elif number < 0:
    print("The number is negative.")
else:
    print("The number is zero.")

number = int(input("Enter a number: "))
if number % 2 == 0:
    print(f"{number} is even.")
else:
    print(f"{number} is odd.")
# Lists
numbers = []
n = int(input("How many numbers do you want to input? "))
for i in range(n):
    num = int(input(f"Enter number {i + 1}: "))
    numbers.append(num)
print(f"Your list: {numbers}")
names = []
n = int(input("How many names do you want to enter? "))
for i in range(n):
    name = input(f"Enter name {i + 1}: ")
    names.append(name)
print(f"Your names list: {names}")
# Indexing
names = input("Enter three names, separated by spaces: ").split()
index = int(input(f"Enter an index (0 to {len(names) - 1}): "))
print(f"The name at index {index} is {names[index]}")
fruits = input("Enter three fruits, separated by spaces: ").split()
index = int(input(f"Enter an index (0 to {len(fruits) - 1}): "))
new_fruit = input("Enter a new fruit to replace the old one: ")
fruits[index] = new_fruit
print(f"Updated list of fruits: {fruits}")