import Card from "../../../components/Card";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
export default function boxview({cajaBuscada}){

    
    console.log("AAAAAA",cajaBuscada.results)

    const [mostrar, setMostrar] = useState (false)
    

    
    
    

    return(<>

    <h2>Chest: {cajaBuscada.results[0].name}</h2>
    <label for="key">Digita la clave del cofre:</label>
    <input type="text" id="key" onChange={()=>{if(key.value==cajaBuscada.results[0].password){
        setMostrar(true)

    }}} ></input>
    
    {cajaBuscada.results.map((x)=>(
        <div>
            {
            mostrar!=false ? (<div><h3>{x.title}</h3>
            <p>{x.content}</p></div>) : (<div><h3>*******</h3>
            <p>********</p></div>)

            }
            

    
    
        </div>
    ))
    }   </>)
    
    //si voy a esta url se muestra el valor digitdo en la url http://localhost:3000/api/box/233
}

export async function getServerSideProps(context){
    const { params } = context;
    const response = await axios.post('http://localhost:3000/api/boxes', {cajaBuscada:params.boxview[0]});

    
    return {
        props:{cajaBuscada:response.data}
    }
}


// 