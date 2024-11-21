document.getElementById('checkButton').addEventListener('click', function() {
    const word = document.getElementById('wordInput').value.trim();
    const resultElement = document.getElementById('result');
  
    if (word === '') {
      resultElement.textContent = 'Please enter a word!';
      resultElement.style.color = 'red';
      return;
    }
  
    const reversedWord = word.split('').reverse().join('');
    if (word.toLowerCase() === reversedWord.toLowerCase()) {
      resultElement.textContent = `"${word}" is a palindrome! 🎉`;
      resultElement.style.color = 'green';
    } else {
      resultElement.textContent = `"${word}" is not a palindrome.`;
      resultElement.style.color = 'red';
    }
  });
  