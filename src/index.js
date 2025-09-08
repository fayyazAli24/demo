const express = require('express');
const app = express();
const port = 3000;

// Translation data
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

  ur_PK:{
      title: 'Bienvenue',
    button1: 'Cliquez-moi',
    button2: 'Soumettre',
    button3: 'Annuler',
    change_lang: 'Changer de langue',
  }

};

// ✅ API to get all translations
app.get('/translations', (req, res) => {
  res.json(translations);
});

// ✅ API to get available language codes
app.get('/languages', (req, res) => {
  const languages = Object.keys(translations); 
  // ["en_US", "es_ES", "fr_FR"]
  res.json(languages);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
