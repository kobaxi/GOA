def calculator():
    num = float(input("შემოიტანე რიცხვი"))
    if num > 0:
        print("დადებითა")
    elif num < 0:
        print("უარყობითია")
    else:
        print("რიცხვი არის ნული")     
calculator()