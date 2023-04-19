import Card from "../../../components/Card";
import { useRouter } from "next/router";
import axios from "axios";
export default function boxview({cajaBuscada}){

    
    console.log("AAAAAA",cajaBuscada)
   
    
    for( x of cajaBuscada.results){
        console.log("KASJSAK", x)
    }
    


    return(<>
    {}aaa</>)
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