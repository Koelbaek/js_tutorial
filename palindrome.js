// Reverses a string. 
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// From page exercise: Divide an e-mail into username and domain.
function emailParts(email) {
  let processedMail = email.toLowerCase();
  return processedMail.split("@")
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
    return this.processedContent() === reverse(this.processedContent());
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