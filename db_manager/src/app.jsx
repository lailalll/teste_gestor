import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Page from "../front/home/page";
import Out from "./out";
const App = ()=>{
    const [teste,setTeste] = useState(0);
    const [pass,setPass] = useState(111);
    const [numb,setNumb] = useState(222);
    
    function Teste(n,p){
        if(pass==p&&numb==n){
            setTeste(1);
            console.log("igual");
            return true
        }else{
            console.log("Não igual");
        }
    } 
    function  call_teste(number,password){
       // Teste(number,password);
    }
    useEffect(()=>{

    },[teste])
    if(teste){
        return(
            <Page/>
        )
    }else{
        return(<Out passe={setPass} numb={setNumb} teste={Teste} call_teste={call_teste}/>)
    }
}

export default App;