'use client'


import Pagina from '@/components/Pagina'
import { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPlusCircle } from 'react-icons/fa'

export default function FaculdadesPage() {

  const [faculdades, setFaculdades] = useState([])

  useEffect(() => {
    // Busca a lista do localStorage, se não existir, inicia uma vazia
    const faculdadesLocalStorage = JSON.parse(localStorage.getItem("faculdades")) || []
    // guarda a lista no estado faculdades
    setFaculdades(faculdadesLocalStorage)
    console.log(faculdadesLocalStorage)
  }, [])

  return (
    <Pagina titulo={"Lista de Faculdades"}>
      <div className='text-end mb-2'>
        <Button href='/faculdades/form'><FaPlusCircle /> Novo</Button>
      </div>

      {/* Tabela com as faculdades */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>País</th>
            <th>Estado</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody>
          {faculdades.map(faculdade => {
            return (
              <tr>
                <td>{faculdade.nome}</td>
                <td>{faculdade.endereco}</td>
                <td>{faculdade.pais}</td>
                <td>{faculdade.estado}</td>
                <td>{faculdade.cidade}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>



    </Pagina>
  )
}
