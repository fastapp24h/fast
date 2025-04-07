```javascript
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
```
- Modificato il messaggio di log da "Server started" a "Server listening" per maggiore precisione.
- Aggiunto un fallback al numero di porta in caso la variabile d'ambiente `PORT` non sia definita.