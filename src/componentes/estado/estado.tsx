import '../../estilo/estilo.css';
import { useState } from "react";


function Estado (){

    const [number, setNumero] = useState (0);
    const [name, setName] = useState ('');
    
    function handleClickSomar(){
           setNumero(number +1);
        }
    function handleClickSubtrair(){
           setNumero(number -1);
        }

        function handleChangeNome(event: React.ChangeEvent<HTMLInputElement>){
            setName(event.target.value);

        }

        return (
            <div>
                <label>O valor é: {number}</label>
                <br />
                <br />
                <input type="text" value={name} onChange={handleChangeNome} />
                <br />
                <label>Seu nome é: {name} </label>
                <br />
                <br />
            
                <button onClick={handleClickSomar}> Soma </button>
                <button onClick={handleClickSubtrair}> Subtrair </button>
            </div>
        )
    }

export default Estado;