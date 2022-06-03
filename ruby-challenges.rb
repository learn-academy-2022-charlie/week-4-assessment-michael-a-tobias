# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.
    # I will have to create a method that takes in an interger as an argument
    # The method will use a conditional and determine if the argument is even or odd and return a string.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def odd_even interger
    # The method is called 'odd_even' and it takes an interger as an arugment
    if interger.even?
        # The method '.even?' determine if the value is even ...
        "#{interger} is even"
        # ... and return a string stating it is even.
    else
        # If the value is not even ... 
        "#{interger} is odd"
        # ... it will return a string stating it is odd.
    end
end

p odd_even num1
p odd_even num2
p odd_even num3



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
    # I will create a named method that takes a string as an argument.
        # I will use a the method '.delete' to delete vowels using a the string 'aeiouAEIOU'

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels string
    # A method named "no_vowels" takes an argument as a string ...
    string.delete 'aeiouAEIOU'
    # ... returns it back without any vowels.
end

p no_vowels album1
p no_vowels album2
p no_vowels album3


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
    # I will create a method that takes a string as an argument
    # I will the compare the string.downcase to string.reverse.downcase
        # I will return a specific string based on the Boolean result


palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palin_test string
    # The method is named 'palin_test' and it takes a string as an  argument
    if string.downcase == string.reverse.downcase
        # To prevent bugs resulting from any capital letters, I will force the strings into lower case
        # I will then compare the string to the reverse of itself. If the string strictly equals the reverse of itself ... 
        "#{string} is a palindrome"
        # ... I will return a string indicating it is a palindrome.
    else 
        "#{string} is not a palindrome"
        # If the string is not a palindrome, I will return a string stating as such.
    end
end

p palin_test palindrome_tester1
p palin_test palindrome_tester2
p palin_test palindrome_tester3