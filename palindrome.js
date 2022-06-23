// Reverses a string. 
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// From page exercise: Divide an e-mail into username and domain.
function emailParts(email) {
  let processedMail = email.toLowerCase();
  return processedMail.split("@")
}

// Adds 'last' to all arrays.
// Returens the last object of an array.
Array.prototype.last = function() {
  return Array.from(this).slice(-1);
}

// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds 'blank' to all strings 
// returns true if a string is blank or consists of only white space
String.prototype.blank = function() {
  return !this.match(/\S/gm);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content; 

  // Returns a LOUDER version of the content.
  this.louder = function() {
    return louderContent = this.content.toUpperCase();
  }

  // Processes input for palindrome testing.
  this.processor = function(string) {
    return string.toLowerCase();
  }

  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();