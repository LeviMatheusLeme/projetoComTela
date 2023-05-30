import './estilo/estilo.css'
import Rodape from './componentes/rodape';
import Cabecalho from './componentes/cabecalho';
import Centropagina from './componentes/centro';
import { Route, Routes } from 'react-router-dom';
import Home from './paginas/home';
import Sobre from './paginas/sobre';
import SobreAluno from './paginas/sobrealuno';
import SobreProfessor from './paginas/sobreprofessor';
import NotFound from './paginas/notfound';
import SobreItemAluno from './paginas/SobreItemAluno';
import Contador from './paginas/contador';
import Pai from './paginas/pai';
import Filho from './paginas/filho';
import Inicial from './paginas/paginainicial';

/*import é a função que importa um arquivo de uma pasta na qual queremos*/

  function App() {
    return (
      <div>
        
        <Routes>
          <Route path="/" element={<Inicial/>} />
          <Route path="/sobre" element= {<Sobre/>} />
          <Route path="/sobre/sobrealuno" element= {<SobreAluno/>} />
          <Route path="/sobre/sobreprofessor" element= {<SobreProfessor/>} />
          <Route path="/sobre/:sobreintemaluno" element= {<SobreItemAluno/>} />
          <Route path="/contador" element= {<Contador/>} />
          <Route path="*" element={<NotFound/>} /> 
          <Route path="/pai" element={<Pai/>} /> 
          <Route path='/paginainicial' element={<Inicial/>} /> 
        </Routes>              
        
      </div>
  );
}

export default App;
