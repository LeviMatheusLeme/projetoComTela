import '../estilo/estilo.css';
import Cabecalho from '../componentes/cabecalho';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import {
    UncontrolledAccordion,
    AccordionItem,
    AccordionHeader,AccordionBody, Button
  } from 'reactstrap';

    function SobreAluno (){
      const [show, setShow] = useState(false);

    function handleClickMostrar(){
      setShow(!show);
    }

    return(
        <div>        
          <Button onClick={handleClickMostrar}color='warning'>{ show? 'ocultar' : 'mostrar'}</Button>
          <br />

          {show === true &&
          <div>
            este sera exibido condicionalmente!
          </div>
          }

          <br />
          <br />
          
            <Cabecalho             
            
            cabHome={"Home"}
            cabSobre={"Sobre"}
            cabSobrealuno={"Sobre Aluno"}
            cabSobreprofessor={"Sobre Professor"}
            cabContador={"Contador"}
            cabMapa={"sobrealuno"}
            />
        </div>
        )
    }

    export default SobreAluno;