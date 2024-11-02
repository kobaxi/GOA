numbers = [10 , 20 , 30 , 40 , 50]
numbers.append(60)
print(numbers)
numbers.remove(30)
print(numbers)
for i in range(len(numbers)):
    numbers[i]*2=2
print(numbers)
print(sum(numbers))