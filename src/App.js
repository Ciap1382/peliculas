import './App.css';
import './Estilos.css';
import Encabezado from './Componentes/Site/Encabezado/Encabezado';
import Piepagina from './Componentes/Site/Piepagina/Piepagina';
import Contenido from './Componentes/Site/Contenido/Contenido';
function App() {   
  return (  
       <div className="App">
        <Encabezado/>
        <Contenido/>
        <Piepagina/>
    </div>
  )}
export default App;
