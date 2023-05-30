import '../../estilo/estilo.css';
import { Link } from 'react-router-dom';

type Props = {
  
  titHome?: String
  titSobre?: String
  titSobrealuno?: String
  titSobreprofessor?: String
  titContador?: String
  
}

function Itensmenu(menu: Props) {
    return (
      <div className='login'>
        <table>
            <tr>
              <td><Link className='bot' to="/"> {menu.titHome} </Link></td>
              <td><Link className='bot' to="/sobre">{menu.titSobre}</Link></td>
              <td><Link className='bot' to="/sobre/sobrealuno">{menu.titSobrealuno}</Link></td>
              <td><Link className='bot' to="/sobre/sobreprofessor">{menu.titSobreprofessor}</Link></td>
              <td><Link className='bot' to="/contador">{menu.titContador}</Link></td>             
            </tr>
        </table>
      </div>
    );
  }

  export default Itensmenu;