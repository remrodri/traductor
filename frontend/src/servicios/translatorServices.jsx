import axios from "axios"
const apiKey = 'AIzaSyCJkP29WBNYY7cnzy8vIcNMhMQ0aAJj6Wo';
const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(`${apiUrl}?key=${apiKey}`,
      {
        q: text,
        target: targetLanguage,
      }
    );
    console.log(response.data);
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    return '';
  }
};



export {
  translateText,


}

