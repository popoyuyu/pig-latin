Describe: findVowel()

Test: "It will come out yes for words that begin with a vowel."
Code: findVowel("hello this is a test");
Expected Output: "yes"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: findVowel("hello this is a test");
Expected Output: "isway, away"


Describe: ifVowel()
Test: "It will remove the first letter that is not a vowel to the end of the word."
Code: ifVowel("hello this is a Test quiz");
Expected Output: "elloh"

Test: "It will join 'ay' to the first removed consonant."
Code: findVowel("hello this is a Test quiz");
Exepected Output: "ellohay"


Describe: isConsonant()
Test: "It will shift letters up to vowel to the end of the word and add ay."
Code: ifVowel("hello hi this is.");
Expected Output: "ellohay ihay isthay isay"


Describe: ifQ()
Test: "It will take words beginning with 'qu' and shift to back of the word while adding 'ay'."
Code: ifVowel("hello hi this is quiz.");
Expected Output: "ellohay ihay isthay izquay"