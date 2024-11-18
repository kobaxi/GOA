def count_words(text):
    words = text() 
    return len(words)  
text = input("Enter the text: ")
print("Number of words:", count_words(text))