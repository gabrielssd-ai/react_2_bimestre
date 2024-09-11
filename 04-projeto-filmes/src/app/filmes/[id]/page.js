'use client'

import apiFilmes from '../../apis/apiFilmes'
import Pagina from '../../components/Pagina'
import { useEffect, useState } from 'react'
import { CardImg, Col, Row } from 'react-bootstrap'

export default function page(props) {

    const [filme, setFilme] = useState()

    useEffect(() => {
        buscarFilme()
    }, [])


    async function buscarFilme() {
        const resultado = await apiFilmes.get("/movie/" + props.params.id + "?language=pt-BR")
        const filmeRecebido = resultado.data
        console.log(resultado.data)
        setFilme(filmeRecebido)
    }



    return (

        <Pagina titulo="Detalhes do Filme">

            {filme.id && (

                <Row>
                    {/* Imagem do Filme */}
                    <Col>
                        <CardImg src={"https://image.tmdb.org/t/p/w500/" + backdrop_path} />
                    </Col>

                    {/* Detalhes do Filme */}
                    <Col>

                    </Col>

                </Row>

            )}


        </Pagina>

    )
}
