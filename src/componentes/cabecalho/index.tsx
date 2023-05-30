import { type } from 'os';
import '../../estilo/estilo.css';
import Itensmenu from '../menu';

type Props = {
  cabMapa?: String;
  cabHome?: String;
  cabSobre?: String;
  cabSobrealuno?: String;
  cabSobreprofessor?: String;
  cabContador?: String;

}

const Cabecalho = (cab: Props) => {
    return (
      <div>
        <div className='cabecalho'>
        <Itensmenu titHome={cab.cabHome}
                   titSobre={cab.cabSobre}
                   titSobrealuno={cab.cabSobrealuno}
                   titSobreprofessor={cab.cabSobreprofessor}
                   titContador={cab.cabContador}/>
        </div>
        <div className='caminho'>
          <h3>Você está na página {cab.cabMapa}</h3>
        </div>
      </div>
    );
  }

export default Cabecalho;
