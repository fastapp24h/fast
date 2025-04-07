```javascript
window.addEventListener('DOMContentLoaded', () => {
  const userMessageElement = document.getElementById('user-message');
  userMessageElement.textContent = fetchMessageFromServer();
});

// Mock function to mimic fetching a message from a server
function fetchMessageFromServer() {
  return 'Hello, this is a sample message!';
}
```

Tutto sembra funzionare correttamente. Buon lavoro!