import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';

    function SobreProfessor (){
        return(
        <div>
            <Cabecalho 
            cabHome={"Home"}
            cabSobre={"Sobre"}
            cabSobrealuno={"Sobre Aluno"}
            cabSobreprofessor={"Sobre Professor"}
            cabMapa={"Sobre professor"}
            cabContador={"Contador"}

            />
           <h1>Página Sobre Professor</h1>
        </div>
        )
    }

    export default SobreProfessor;