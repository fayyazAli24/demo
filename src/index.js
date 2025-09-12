const express = require('express');
const axios = require('axios'); // for making API requests
const app = express();
const port = 3000;

app.use(express.json());

// Translation data
var translations = {
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
  ur_PK: {
    title: 'خوش آمدید',
    button1: 'کلک کریں',
    button2: 'جمع کریں',
    button3: 'منسوخ کریں',
    change_lang: 'زبان تبدیل کریں',
  },
};

// ✅ API to get all translations
app.get('/translations', (req, res) => {
  res.json(translations);
});

// ✅ API to get available language codes
app.get('/languages', (req, res) => {
  const languages = Object.keys(translations);
  res.json(languages);
});

// ✅ API to add a new language (with auto translation)
app.post('/add-language/:code', async (req, res) => {
  const langCode = req.params.code;  // e.g. de_DE
  const lang = langCode.split('_')[0]; // extract "de"

  if (translations[langCode]) {
    return res.status(400).json({ message: `Language ${langCode} already exists` });
  }

  try {
    const baseLang = 'en'; // use English as source
    const template = translations['en_US'];

    const newLang = {};

    // Loop through all keys and translate them
    for (const key of Object.keys(template)) {
      const text = template[key];

      // Call LibreTranslate API
      const response = await axios.post('https://libretranslate.de/translate', {
        q: text,
        source: baseLang,
        target: lang,
        format: "text"
      }, {
        headers: { 'accept': 'application/json' }
      });

      newLang[key] = response.data.translatedText;
    }

    translations[langCode] = newLang;

    res.json({ message: `Language ${langCode} added successfully`, data: newLang });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error translating language', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
