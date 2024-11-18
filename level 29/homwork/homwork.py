def bmi_calculation(l,y):
    bmi = l / (y ** 2)
    if bmi < 18.5:
        return "გამხდარი ხარ"
    elif bmi <= 25:
        return "ნორმალური წონა"
    elif bmi <= 30:
        return "არ ხარ გამხდარი"
    else:
        return "მსუქანი ხარ"
l = float(input("შემოიტანე შენი წონა (kg): "))
y = float(input("შემოიტანე შენი სიმაღლე (მეტრი): "))

print(bmi_calculation(l, y))