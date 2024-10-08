import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../public/header/header.jsx";
import Main from "../public/main/main.jsx";
import "./page.css";

function Page(){
    const [teste,setTeste] = useState(1);
    useEffect(()=>{

    },[teste])
    if(teste){
        return(
            <div className="page">
                <Header/>
                <Main/>
            </div>
        )
    }else{
        return(
            <div>
                
             </div>
            )
    }

}

export default Page;