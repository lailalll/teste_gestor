import React from "react";
import "./itens.css";

import del from "./photos/lixo.png";
import update from "./photos/up.png";
import sms from "./photos/sms.png";
 
function Itens({nome,cell,email,ups,dels,smss}){
    function dele(parms){
        dels(parms)
    }
    function up(parms){
        ups(parms)
    }
    function sm(parms){
        smss(parms)
    }
    return(<tr key={cell}>
           <td>{nome}</td>
           <td className="cell">{cell}</td>
           <td className="td_op">
               <span>{email}</span> 
                <span className="op">
                    <button onClick={()=>{dele(cell)}}><img src={del} alt="icon about del" /></button>
                    <button onClick={()=>{up(cell)}}><img src={update} alt="icom about upadate" /></button>
                    <button onClick={()=>{sm(cell)}}><img src={sms} alt="icon about sms" /></button>
                </span> 
            </td>
        </tr>
        )

    }

export default Itens;