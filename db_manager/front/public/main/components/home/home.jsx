import React from "react";
import { useState } from "react";
import "./home.css";
import Itens from "./itens";
import del from "./photos/lixo.png";
import update from "./photos/up.png";
import sms from "./photos/sms.png";
import { useEffect } from "react";

var itens = [
    {"nome":"Jose Pedro","celular":909375648,"email":"jose@gmail.com"},
    {"nome":"Diogo Ferreira","celular":928475603,"email":"diogo@gmail.com"},
    {"nome":"Ferreira Diogo","celular":958463201,"email":"ferreira@gmail.com"},
    {"nome":"Gelson Pedrito","celular":947586036,"email":"gelson@gmail.com"},
    {"nome":"Faustino Ngunza","celular":940395846,"email":"faustino@gmail.com"},
    {"nome":"Gomes Andre","celular":948567383,"email":"gomes@gmail.com"},
    {"nome":"Gaspar Gomes","celular":936236735,"email":"gaspar@gmail.com"},
    {"nome":"Luiz Pascoal","celular":984756423,"email":"luiz@gmail.com"},
    {"nome":"Delza Pereira","celular":904545886,"email":"delza@gmail.com"},
    {"nome":"Andre Pedro","celular":909334648,"email":"jose@gmail.com"},
    {"nome":"Cardozo Moras","celular":934575603,"email":"diogo@gmail.com"},
    {"nome":"Tecas Jesua","celular":958553201,"email":"ferreira@gmail.com"},
    {"nome":"Oliveira Gaspar","celular":9453216036,"email":"gelson@gmail.com"},
    {"nome":"Diogo Lemos","celular":940393476,"email":"faustino@gmail.com"},
    {"nome":"Comos Junior","celular":948548083,"email":"gomes@gmail.com"},
    {"nome":"Oliveiras Pedro","celular":935636735,"email":"gaspar@gmail.com"},
    {"nome":"Luiza Andrades","celular":987646423,"email":"luiz@gmail.com"},
    {"nome":"Marta Roza","celular":904545444,"email":"delza@gmail.com"},
    {"nome":"Jozimar Pedro","celular":909375888,"email":"jose@gmail.com"},
    {"nome":"Diogina Ferreira","celular":928475000,"email":"diogo@gmail.com"},
    {"nome":"Fernandinho Diogo","celular":958463777,"email":"ferreira@gmail.com"},
    {"nome":"Gemima Pedrito","celular":947586666,"email":"gelson@gmail.com"},
    {"nome":"Francisco Ngunza","celular":947775846,"email":"faustino@gmail.com"},
    {"nome":"Gloria Andre","celular":945557383,"email":"gomes@gmail.com"},
    {"nome":"Gasparino Gomes","celular":936444735,"email":"gaspar@gmail.com"},
    {"nome":"Luizarina Pascoal","celular":984666423,"email":"luiz@gmail.com"},
    {"nome":"Ferreira Pereira","celular":903335886,"email":"delza@gmail.com"},///
    {"nome":"Dinaria Pedro","celular":909355548,"email":"jose@gmail.com"},
    {"nome":"Campos Moras","celular":936665603,"email":"diogo@gmail.com"},
    {"nome":"Celsa Jesua","celular":958577701,"email":"ferreira@gmail.com"},
    {"nome":"Otiniel Gaspar","celular":9223216036,"email":"gelson@gmail.com"},
    {"nome":"Carlas Lemos","celular":940322276,"email":"faustino@gmail.com"},
    {"nome":"Victor Junior","celular":948333083,"email":"gomes@gmail.com"},
    {"nome":"Joker Pedro","celular":933336735,"email":"gaspar@gmail.com"},
    {"nome":"Victor Andrades","celular":987644423,"email":"luiz@gmail.com"},
    {"nome":"Maria Roza","celular":904545555,"email":"delza@gmail.com"}
];
function Home_c(){
    const [control,setControl] = useState(false);
    const [tpc,setTpc] = useState(7843);
    useEffect(()=>{

    },[control])
const updates=(parms,ops)=>{
    if(!ops==1){
        itens.filter((ele,pos)=>{
          if(ele.celular==Number(parms)){
              itens[pos].nome="laila";
          }else{
                return false
            }
      })
    }else{
        itens.map((ele,pos)=>{
            itens[pos].nome="laila";
        })
    }
    if(control){
        setControl(false);
    }else{
        setControl(true);
    }
}
const deletes = (parms,ops)=>{
    if(!ops==1){
        itens =  itens.filter((ele,pos)=>{
          if(ele.celular!=Number(parms)){
              return ele;
          }else{
            //  itens.splice(pos,1);
              console.log(pos)
               if(control){
                   setControl(false);
               }else{
                   setControl(true);
               }
          }
          
        //  mostra()
      })
    }else{
        itens=[]
    }
    if(control){
        setControl(false);
    }else{
        setControl(true);
    }
    setTimeout(() => {
            console.log(itens)
    }, 500);
}
const mensages=()=>{
    alert()
}
return(
        <section>
            <div className="tytle">
                <p>Inicio da pagina Gestão do Banco de Dados</p>
                <p>Mês corrente  <span>:10/2024</span></p>
            </div>
            <div className="painel">
                <div className="painel_filho">   
                    <div className="itens">
                     <table>
                     <tr>
                        <th> Nome </th> <th>Cell</th> <th> Email </th> 
                    </tr>
                        { 
                             itens.map((ele,pos)=>(
                            <Itens 
                                key={ele.nome}
                                 nome={ele.nome}
                                 cell={ele.celular} 
                                 email={ele.email}
                                ups={updates}
                                dels={deletes}
                                smss={mensages}
                            />
                            ))
                        }
                    </table>
                    </div>
                </div>
            <div className="left">
                <div className="action_all">
                    <div className="op_all">
                        <h4 style={{color:"rgb(245, 166, 166)",fontWeight:"500"}}>ATT : Está ação reflitira para todos os usuários</h4>
                        <span>
                            <p> Deletar todos </p> <button onClick={()=>{deletes("000",1)}}><img src={del} alt="icon about del" /></button>
                        </span>
                        <span>
                            <p>Atualizar pra todos </p> <button onClick={()=>{updates("000",1)}}><img src={update} alt="icom about upadate" /></button>
                        </span>
                        <span>
                            <p>Sms pra todos </p> <button><img src={sms} alt="icon about sms" /></button>
                        </span>
                    </div> 
                </div>
                <div className="action_all_dois">
                    <div className="op_all">
                        <h4 style={{textAlign:"center",color:"white"}}>Pedidos para hoje</h4>
                        <span>
                            <p> Deletar Pedidos <br/> {tpc}</p> <button ><img src={del} alt="icon about del" /></button>
                        </span>
                        <span>
                            <p>Atualizar Pedidos <br/> {tpc}</p> <button><img src={update} alt="icom about upadate" /></button>
                        </span>
                        <span>
                            <p>Imprimir Pedidos <br/> {tpc} </p> <button><img src={sms} alt="icon about sms" /></button>
                        </span>
                    </div> 
                </div>
                <div className="action_all_tres">
                    <div className="op_all">
                        <h4  style={{textAlign:"center",color:"white"}}>Resumo dos pedidos</h4>
                        <span>
                            <p> Deletar todos  </p> <button><img src={del} alt="icon about del" /></button>
                        </span>
                        <span>
                            <p>Atualizar pra todos </p> <button><img src={update} alt="icom about upadate" /></button>
                        </span>
                        <span>
                            <p>Sms pra todos </p> <button><img src={sms} alt="icon about sms" /></button>
                        </span>
                    </div> 
                </div>
            </div>
            </div>
        </section>
    )
} 

export default Home_c;