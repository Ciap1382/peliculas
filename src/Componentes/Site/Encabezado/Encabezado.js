import Selgeneros from "./Selgeneros"

const Encabezado=()=>{
   return(
    <>
    <div id="encabezado" className="colobase" >
       <div id="logotipo">logotipo peliculas</div>
       <div id="generos"><Selgeneros/></div>
       <div id="registro"> registro</div>
    </div>
    </>
   )
}
export default Encabezado