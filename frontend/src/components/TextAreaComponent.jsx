import { useState } from "react";

function TextAreaComponent(props) {
  const {translateText}=props;
  const [text, setText] = useState('');
  const [translated, setTranslated] = useState('')
  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };
  const handleCaptureClick = async() => {
    //console.log('Texto capturado: ', text);
    //setTranslated(text)
    setTranslated( await translateText(text.toLowerCase().replace(/[^a-z0-9\s]/g, ''),'en'))
    //console.log('setTranslated::: ', await translateText(text,'en'));
  };

  return (
    <div className="componentContainer">
      <p>Ingresa un texto para traducirlo a ingles</p>
      <div className="textAreaContainer">
        <textarea
        placeholder="ingresa el texto aqui"
          value={text}
          onChange={handleTextareaChange}
          rows={4}
          cols={50}
        />
        <textarea
        placeholder="aqui obtendras el texto traducido"
          readOnly
          value={translated}
          rows={4}
          cols={50}
        />
      </div>
      <div className="buttonContainer">
        <button onClick={handleCaptureClick}>traducir texto</button>

      </div>
    </div>
  )
}
export default TextAreaComponent;