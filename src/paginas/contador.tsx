import Cabecalho from "../componentes/cabecalho";
import Estado from "../componentes/estado/estado";


function Contador (){
    return (
        <div>
            <Cabecalho 
            cabHome={"Home"}
            cabSobre={"Sobre"}
            cabSobrealuno={"Sobre Aluno"}
            cabSobreprofessor={"Sobre Professor"}
            cabMapa={"Contador"}
            cabContador={"Contador"}
            />
            <Estado />
        </div>
    
    )
}

export default Contador;