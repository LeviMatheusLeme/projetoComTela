import { Button, Input, } from "reactstrap";

function Inicial() {
    return (
        <div>
            <div style={{
                backgroundImage: `url('/fundo.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }} className="div_principal">

                <div className="div_top"></div>
                
                <div style={{
                    backgroundImage: `url('/formas.png')`,
                    backgroundRepeat: 'no-repeat',
                }} className="div_centro">
                    
                <div className="div_logopai">    
                    <div className="div_logo">
                        <img className="logo1" src="logo.png" alt="logo"/>
                    </div>
                </div>
                    
                <div className="div_elementos">
                    <div className="space"><Input placeholder="Usuário" />
                </div>
                        
                <div className="space"><Input placeholder="Senha" />
                </div>
                <br />    
                
                <div className="entrar"><Button color="success" size="lg">Entrar</Button></div>  
                </div>

                </div >
                <div className="div_bottom"></div>
            </div>
        </div>
    )
}

export default Inicial