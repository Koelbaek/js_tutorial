let assert = require("assert");
const { isTypedArray } = require("util/types");
let Phrase = require("../index.js");

describe("Phrase", function() {
  // Phrase#palindrome
  describe("#palindrome", function() {

    it("Should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });
    
    it("Should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("Should return true for a mixed-case palindrome", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });
      
    it("Should return true for a plaindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    })
  });

  // Phrase#letters
  describe("#letters", function() {
    it("Should return only letters", function (){
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual("MadamImAdam", punctuatedPalindrome.letters());
    });
  })
});