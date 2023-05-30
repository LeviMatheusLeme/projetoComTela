import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';

    function Sobre (){
        return(
        <div>
            <Cabecalho 
                cabHome={"Home"}
                cabSobre={"Sobre"}
                cabSobrealuno={"Sobre Aluno"}
                cabSobreprofessor={"Sobre Professor"}
                cabMapa={"Sobre"}
                cabContador={"Contador"}
            />
            <h1>Página Sobre</h1>
        </div>
        )
    }

    export default Sobre;