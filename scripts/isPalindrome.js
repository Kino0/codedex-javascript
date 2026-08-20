function isPalindrome(word) {

  const lowerWord = word.toLowerCase();
  const invertedWord = lowerWord.split("").reverse().join("");

  if (invertedWord === lowerWord) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("noon"));