function findVowel(sentence) {
  let words = sentence.split(' ');
  words.forEach(function (word) {
    let letters = word.split('');
    console.log(letters[0]);
    if (letters[0] === 'a' || letters[0] === 'e' || letters[0] === 'i' || letters[0] === 'o' || letters[0] === 'u' || letters[0] === 'A' || letters[0] === 'E' || letters[0] === 'I' || letters[0] === 'O' || letters[0] === 'U') {
      word = word.concat("way");
    }
    console.log(word);
  });
}

findVowel("hello this is a Test");