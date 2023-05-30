import '../estilo/estilo.css';
import { type } from '@testing-library/user-event/dist/type';
import Cabecalho from '../componentes/cabecalho';

function handleClickButton () {
    alert('Clicou! <3');
}

    function Home (){
        return(
        <div>
            <Cabecalho 
            
            cabHome={"Home"}
            cabSobre={"Sobre"}
            cabSobrealuno={"Sobre Aluno"}
            cabSobreprofessor={"Sobre Professor"}
            cabMapa={"Início"}
            cabContador={"Contador"}
            />
            <h1>Pagina Home</h1>
            
        </div>
        )
    }

    export default Home;