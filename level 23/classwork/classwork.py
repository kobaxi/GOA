def math_genious():
        pepole_choise = input("enter what do you want to do with CALCULATOR : ")
        if pepole_choise == "*":
            def math():
                num1 = float(input("enter any number : "))
                num2 = float(input("enter any number : "))
                print(num1)
                print("*")
                print(num2)
        
                print("is:")
                print(num1 * num2)
            math()
        elif pepole_choise == "+":
            def math():
                num3 = float(input("enter any number : "))
                num4 = float(input("enter any number : "))
                print(num3)
                print("+")
                print(num4)
        
                print("is:")
                print(num3 + num4)
            math()
        elif pepole_choise == "/":
            def math():
                num5 = float(input("enter any number : "))
                num6 = float(input("enter any number : "))
                print(num5)
                print("/")
                print(num6)
            
                print("is:")
                print(num5 / num6)
            math()
        elif pepole_choise == "-":
            def math():
                num7 = float (input("enter any number : "))
                num8 = float(input("enter any number : "))
                print(num7)
                print("-")
                print(num8)
            
                print("is:")
                print(num7 - num8)
            math()
math_genious()
