import Cabecalho from "../componentes/cabecalho";
import Filho from "./filho";

    function Pai () {

        function handleEventoPai (texto: string){
            alert ("Mensagem do pai: "+ texto);
        }

        return (
            <div>
                <Cabecalho />
                <Filho texto="Este texto foi enviado pelo pai"
                    onClickFN={handleEventoPai}/>
                <hr />

                <h1>Pai</h1>
            </div>
        )
    }

    export default Pai;