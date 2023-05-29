import styles from "@/styles/TelaGuiches.module.css";
import { BsDisplay } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { BsPersonPlus } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import PainelSenha from "./painelSenha";
import Link from "next/link";
import acessToken from "../api/token";

export default function Guiches(){

    const [guiches, setGuiches] = useState([])
    const [painel, setPainel] = useState(false)
   

    useEffect(() => {
        if(painel == false){
                let token = acessToken().token;
                let urlApi = acessToken().url;
        
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
        
            axios.get(urlApi+'/guiche', config)
                .then((val) => {
                    console.log(val.data);
                    setGuiches(val.data.guiches);
                })
                .catch((error) => console.log(error));
        }
        
    }, [painel]);



    return (
    <>
    <div className={styles.menu}>
     <BsList className={styles.iconeAndroid}/>   
    </div>
    <div className={styles.container}>
        <div className={styles.menuVertical}>
            <div className={styles.listaMenus}>
                <div className={styles.caixaMenu}><Link href="/senhas"><BsDisplay className={styles.iconeTela}/></Link></div>
                
            </div>
        </div>

        <div className={styles.conteudos}>
            {painel ? <PainelSenha dados={painel} onClose={setPainel}/> : 
                <><h4>Selecione o guichê para ir trabalhar</h4><div className={styles.cards}>

                            {guiches.map((val) => (
                                <div key={val.id} className={styles.card}>
                                    <BsXCircleFill className={styles.botaoFechar} />
                                    <div><BsLaptop className={styles.iconeTelaCard} /></div>
                                    <div><h4>Guichê: {val.numero_guiche}</h4></div>
                                    <div><button className={val.status == 'indisponivel' ? styles.botaoVermelho : styles.botao} onClick={()=> {setPainel(val)}}>{val.status}</button></div>
                                </div>
                            ))} 

                        </div></>
            }
            
        </div>
    </div>
    
         
    </>
    )
}