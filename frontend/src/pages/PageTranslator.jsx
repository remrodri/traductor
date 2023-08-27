import { translateText } from "../servicios/translatorServices";

function PageTranslator() {
  translateText("hola como estas",'en')

  return (
    <div>
      pagina contenedora de input y ouput
      <p>{}</p>
    </div>)
}
export default PageTranslator;