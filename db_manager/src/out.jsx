import React from "react";
import { useState } from "react";
import "./out.css";
import cell from "./photos/cell.png";
import pass from "./photos/fecha.png";
const Out = ({passe,numb,teste, call_teste})=>{
    const [number,setNumber] = useState("");
    const [password,setPassword] = useState("");

function send(){
    if(number!=" "&&password!=" "){
    passe(password);
    numb(number);
    console.log(password,number);
    setTimeout(() => {
        call_teste(number,password)
        teste(number,password)
    }, 500);
    }else{
        console.log(password,number);
        console.log("Nada");
    }
}
    return(
<section>
    <span className="ref">
        <span className="p1"></span><span className="p2"></span><span className="p3"></span><span className="p4"></span>
        <div className="login">
            
            <div> <h3>Iniciar Sessão</h3> </div>
            <div>
                <span>
                    <input onChange={(evt)=>{setNumber(evt.target.value)}} type="text" placeholder="Numero : "/>
                    <img className="cell"  src={cell} alt="image about cell" />
                </span>
                <span>
                    <input onChange={(evt)=>{console.log(evt.target.value);setPassword(evt.target.value)}} type="text" placeholder="Password : "/>
                    <img className="pass" src={pass} alt="image about password" />
                </span>
                <p>Insira todos os dados para logar</p>
            </div>
            <div>
                <button onClick={()=>{send()}}>Entrar</button>
                <p>Não tenho conta ! <span>Criar</span></p>
            </div>
        </div>
    </span>
</section>
    )
}

export default Out;