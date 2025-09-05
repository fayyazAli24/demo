const express = require('express');
const app = express();
const port = 3000;

// Serve translations JSON
app.get('/translations', (req, res) => {
  const translations = {
    en_US: {
      title: 'Welcome',
      button1: 'Click Me',
      button2: 'Submit',
      button3: 'Cancel',
      change_lang: 'Change Language',
    },
    es_ES: {
      title: 'Bienvenido',
      button1: 'Haz clic',
      button2: 'Enviar',
      button3: 'Cancelar',
      change_lang: 'Cambiar idioma',
    },
    fr_FR: {
      title: 'Bienvenue',
      button1: 'Cliquez-moi',
      button2: 'Soumettre',
      button3: 'Annuler',
      change_lang: 'Changer de langue',
    },
  };

  res.json(translations);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
