import { type } from "@testing-library/user-event/dist/type";

    type Props = {
        texto? : String;  
        onClickFN: (texto: string) => void;      
    }


    function Filho (param: Props) {   
        
        function handleClickButton(){
            param.onClickFN ("Oi pai, sou seu filho!")
        }
    
     
     
        return (
            <div>
                <h1>Filho</h1>
                Valor da Prop = {param.texto}
                <button onClick={handleClickButton} > Clique Aqui para disparar o evento do filho </button>
            </div>
        )
    }

    export default Filho;