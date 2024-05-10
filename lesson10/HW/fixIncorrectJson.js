const incorrectJson = `[
  {
      userName:"Test",
      lastName:"Test",
      <email:"test.test@gmail.com>"
  },
  {
      userName:"Dmitro",
      lastName:"Porohov",
      <email:"dmitro.porohov@yahoo.com>"
  },
  {
      userName:"Andrii",
      lastName:"",
      <email:"andrii@mail.ru>"
  }
]`;

// Function to fix incorrect JSON by removing '<' from object keys
function fixIncorrectJson(incorrectJson) {
  return incorrectJson.replace(/<(\w+)/g, "$1");
}

// Function to add double quotes around keys in JSON string
function addQuotesToKeys(jsonString) {
  const regex = /(\w+):/g;
  return jsonString.replace(regex, '"$1":');
}

// Function to parse JSON string into JavaScript object
function parseJson(jsonString) {
  return JSON.parse(jsonString);
}

// Example usage
const fixedJson = fixIncorrectJson(incorrectJson);
const modifiedJson = addQuotesToKeys(fixedJson);
const parsedJson = parseJson(modifiedJson);
console.log(parsedJson);
