const textarea = document.getElementById('background-text');
const clearButton = document.getElementById('clear-btn');
const dynamicContent = document.getElementById('dynamic-content');

textarea.addEventListener('input', () => {
  const text = textarea.value;
  window.electronAPI.logText(text);
  // Update dynamic content based on input
  dynamicContent.textContent = text ? `You typed: ${text}` : 'This content can change based on your actions.';
});

clearButton.addEventListener('click', () => {
  textarea.value = ''; // Clear the textarea
  dynamicContent.textContent = 'The content has been cleared.';
});
