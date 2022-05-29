let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify (string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version (Gives the machine a sequence of commands)
function imperativeUrls(elements) {
  let urls = []; 
  elements.forEach(element => {
    urls.push(urlify(element));
  });
  return urls;
}
//console.log(imperativeUrls(states));

// urls: Functional version 
// Here using the *map* function, which can be a powerful alternative to looping
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
//console.log(functionalUrls(states));

// Creating a URL with the urlify function and map.
function stringToURL(elements) {
  return elements.map(element => "https://example.com/" + urlify(element));
}
//console.log(stringToURL(states));

// singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach((element) => {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  })
  return singles;
}
console.log(imperativeSingles(states))

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

// Exercise: Filter Dakotas using String#includes
function dakotaIncluded(elements) {
  return elements.filter(element => element.toLowerCase().includes("dakota"));
}
console.log(dakotaIncluded(states));

// Exercise: Filter Dakotas using regex to identify length of array
function dakotaRegex(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(dakotaRegex(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach((n) => {
    total += n;
  })
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n;});
}
console.log(functionalSum(numbers));

// lenghts: Imperative solution 
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lenghts: Functional solution 
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {})
}
console.log(functionalLengths(states));

// Using functional programming to identify the product of *numbers*
function functionalProduct(elements) {
  return elements.reduce((total, n) => {return total *= n;});
}
console.log(functionalProduct(numbers));