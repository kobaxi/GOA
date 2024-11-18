def search(text, word):
    if word in text:
        return "word found"
    else:
        return "word not found"
text = input()
word = input()
print(search(text, word))