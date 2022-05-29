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

    // Returns true for a paldindrome, false otherwise.
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  }
}

