document.getElementById('randomNumberForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values of the form inputs
  const total = parseInt(document.getElementById('total').value);
  const option = document.querySelector('input[name="option"]:checked').value;
  let min, max, numberList;
  
  // Depending on the selected option, get additional values
  if (option === 'range') {
    min = parseInt(document.getElementById('min').value);
    max = parseInt(document.getElementById('max').value);
  } else if (option === 'list') {
    numberList = document.getElementById('numberList').value.split(',').map(num => parseInt(num.trim()));
  }

  const digits = parseInt(document.getElementById('digits').value);

  // Call your function passing the collected values
  generateRandomNumbers(total, option, min, max, numberList, digits);
});

function generateBinaryCombinations(total, digits, min = 0, max = total - 1, prefix = []) {
  const combinations = [];

  function generate(total, digits, min, max, prefix) {
      // Base case: when the total is 0 and there are no more digits to add
      if (total === 0 && digits === 0) {
          const binaryArray = Array.from({ length: max - min + 1 }, (_, i) => prefix.includes(i + min) ? 1 : 0);
          combinations.push(binaryArray); // Add the binary array to combinations
          return;
      }

      // Base case: when the total becomes negative or there are no more digits
      if (total < 0 || digits === 0) {
          return;
      }

      // Recursive case: iterate through possible values from min to max
      for (let i = min; i <= max; i++) {
          // Make a recursive call with the updated total, digits, and prefix
          generate(total - i, digits - 1, i + 1, max, [...prefix, i]);
      }
  }

  // Start the recursive generation process
  generate(total, digits, min, max, prefix);

  return combinations;
}