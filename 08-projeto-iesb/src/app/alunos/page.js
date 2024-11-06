'use client'
import Pagina from '@/components/Pagina'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { FaPen, FaPlusCircle, FaTrash } from 'react-icons/fa'

export default function page() {
    const [alunos, setAluno] = useState([])

    useEffect(()=>{
        const alunoLocalStorage = JSON.parse(localStorage.getItem('alunos')) || []
        setAluno(alunoLocalStorage)
        console.log(alunoLocalStorage)
    },[])
    function excluir(aluno){
        if (window.confirm(`Deseja realmente excluir o aluno ${aluno.nome}?`)) {
            // filtra a lista antiga removando o curso recebido
            const novaLista = alunos.filter(item => item.id !== aluno.id)
            // grava no localStorage a nova lista
            localStorage.setItem('alunos', JSON.stringify(novaLista))
            // grava a nova lista no estado para renderizar na tela
            setAluno(novaLista)
            alert("Aluno excluído com sucesso!")
          }
    }
  return (
    <Pagina titulo={'Lista de Alunos'} >
      <div className='text-end mb-2'>
        <Button href='/alunos/form'><FaPlusCircle /> Novo</Button>
      </div>

      {/* Tabela com os Cursos */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Matricula</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Faculdade</th>
            <th>Curso</th>
            <th>Periodo</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => {
            return (
              <tr>
                <td>{aluno.foto}</td>
                <td>{aluno.matricula}</td>
                <td>{aluno.nome}</td>
                <td>{aluno.sobrenome}</td>
                <td>{aluno.faculdade}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.periodo}</td>
                <td className='text-center'>
                  {/* Botões das ações */}
                  <Button className='me-2' href={`/alunos/form?id=${aluno.id}`}><FaPen /></Button>
                  <Button variant='danger' onClick={() => excluir(aluno)}><FaTrash /></Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>

    </Pagina>
  )
}
