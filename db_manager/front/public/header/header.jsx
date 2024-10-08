import React from "react";
import "./header.css";
import log from "./photos/log2.png";
import home from"./photos/house.png";
import logado from "./photos/logado.png";
import registo from "./photos/registo.png";
import gestores from "./photos/gestores.png";
import clientes from "./photos/clientes.png";
import stock from "./photos/stock.png";
import sms from "./photos/sms.png";
import tarefas from "./photos/tarefas.png";
import pedidos from "./photos/pedidos.png";
import user from "./photos/user.jpg";
function Header(){
    return(
        <header>
                <div className="box_log">
                    <img className="log" src={log} alt="img about log" />
                    <h3>Gestor de banco de dados</h3>
                </div>
                <div className="box_user">
                    <img className="user" src={user} alt="img about the user" />   
                    <br />
                    <details>
                        <summary>
                            Gestor
                        </summary> 
                        <p><span>Nome</span>  <span> : quinguri Quin</span></p>
                        <p><span>Code</span>  <span> : 323232323 </span></p>
                        <p><span>Id</span> <span> : 1dd13d12d13 </span></p>
                        <p><span>Chave</span>  <span> : 1d3d21d123d123d </span></p>
                    </details>
                </div>
                <div>
                    <nav>
                        <ol>
                            <li><img src={home} alt="img about home link"/><span>  inicio </span> </li>
                            <li><img src={logado} alt="img about home logado" /><span>  logado </span> </li>
                            <li><img src={registo} alt="img about home registos" /><span> registo </span> </li>
                            <li><img src={gestores} alt="img about home gestores" /><span> gestores </span> </li>
                            <li><img src={clientes} alt="img about home cliente" /><span> clientes </span> </li>
                            <li><img src={stock} alt="img about home stock" /><span> stock </span> </li>
                            <li><img src={sms} alt="img about home sms" /><span> sms </span> </li>
                            <li><img src={tarefas} alt="img about home tarefas" /><span> tarefas </span> </li>
                            <li><img src={pedidos} alt="img about home pedidos" /><span> pedidos </span> </li>
                        </ol>
                    </nav>
                </div>
        </header>
    )
}

export default Header;