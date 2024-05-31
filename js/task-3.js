function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  if (lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("This is not spam, just a letter.")); // false
console.log(checkForSpam("SPAM")); // true

