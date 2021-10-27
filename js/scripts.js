function findVowel(word) {
  let letters = word.split('');
  if (letters[0] === 'a' || letters[0] === 'e' || letters[0] === 'i' || letters[0] === 'o' || letters[0] === 'u' || letters[0] === 'A' || letters[0] === 'E' || letters[0] === 'I' || letters[0] === 'O' || letters[0] === 'U') {
    return true;
  }
  return false;
}

function ifVowel(sentence) {
  let words = sentence.split(' ');
  words.forEach(function (word) {
    if (findVowel(word)) {
      word = word.concat("way");
    }
    else {
      let letters = word.split('');
      letters.push(letters[0], 'a', 'y');
      letters.shift();
      console.log(letters);
      word = letters.join('');
    }
    console.log(word);
  });
}

ifVowel("hello this is a Test quiz");