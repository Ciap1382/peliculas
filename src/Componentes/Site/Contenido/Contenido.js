import Banner1 from './Banner1'
import Cartelera from './Cartelera'
const Contenido=()=>{
    // arreglo de banners
    const banners=[
        {id:1,nombre:"banner1",cls:"bannerimg1"}       
    ] 
   
    return (<>
    <div id="contenido">
        <Cartelera/>

    </div></>)    
}
export default Contenido