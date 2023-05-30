import { useParams, useNavigate } from 'react-router-dom';
import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';


    function SobreItemAluno (){
        const params = useParams();
        const navegador = useNavigate();
        
        function handleClickButton () {
            navegador(-1);

        }


    return(
        <div>
            <Cabecalho cabMapa={'home/SobreAlunos/' + params.parametros} /> 
            <h1>Sobre Item Alunos</h1>
            <br />

            
            
           <h1>Página Sobre item aluno</h1>
           <button onClick={handleClickButton}> Voltar</button>
        </div>
        )
    }

    export default SobreItemAluno;