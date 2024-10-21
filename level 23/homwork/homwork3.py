def age():
    num = float(input("შემოიტანეთ ასაკი: "))
    
    if num < 0:
        print("ახალ დაბადებულ")
    elif num == 0:
        print("ახალ დაბადებული")
    elif num < 13:
        print("ბავშვი")
    elif num < 18:
        print("მოზარდი")
    elif num < 60:
        print("ზრდასრული")
    else:
        print("მოხუცი")

age()