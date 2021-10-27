function findVowel(word) {
  let letters = word.split('');
  if (letters[0] === 'a' || letters[0] === 'e' || letters[0] === 'i' || letters[0] === 'o' || letters[0] === 'u' || letters[0] === 'A' || letters[0] === 'E' || letters[0] === 'I' || letters[0] === 'O' || letters[0] === 'U') {
    return true;
  }
  return false;
}

function isConsonant(word) {
  let letters = word.split('');
  let num = 0;
  for (i = 0; i < word.length && num === 0; i++) {
    if (findVowel(letters[0])) {
      num = 1;
      letters.push('a', 'y');
    }
    else {
      letters.push(letters[0]);
      letters.shift();
    }
  }
  word = letters.join('');
  return word;
}

function ifVowel(sentence) {
  let words = sentence.split(' ');
  words.forEach(function (word) {
    if (findVowel(word)) {
      word = word.concat("way");
      console.log(word);
    }
    else {
      word = isConsonant(word);
      console.log(word);
    }
  });
}

ifVowel("hello hi this is ");