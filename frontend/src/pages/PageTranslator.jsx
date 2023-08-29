
import TextAreaComponent from "../components/TextAreaComponent";
import { translateText } from "../servicios/translatorServices";

function PageTranslator() {
  //translateText("hola como estas", 'en')

  return (
    <div className="pageContainer">
      <div className="translatorContainer">
        <div className="titleContainer">
          <h1>Practica Traductor</h1>
        </div>
        <TextAreaComponent translateText={translateText}/>  
      </div>
    </div>)
}
export default PageTranslator;  