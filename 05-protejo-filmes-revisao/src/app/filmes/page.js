'use client'

import { useEffect, useState } from "react";
import Pagina from "../components/Pagina";


export default function Filmes() {

    // Armazenar um dado para que o react saiba que ele sofreu alguma mudança
    // e mude na tela
    const [filmes, setFilmes] = useState([])


    // Efeito Colateral
    useEffect(() => {
        console.log(filmes)
        // A requisição pra buscar os filmes

        // Alterar o estado filmes

        
    }, [])
    


    return (
        <Pagina titulo="Filmes Populares">

            <ul>
                {
                    filmes.map(filme => {
                        return <li>{filme}</li>
                    })
                }
            </ul>

        </Pagina>
    )
}
