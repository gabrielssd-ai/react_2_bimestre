'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaCheck, FaTrash } from 'react-icons/fa'

export default function CadastroPage() {


  const initialValues = {
    nome: '',
    sobrenome: ''
  }

  function cadastrar(dados) {
    console.log(dados)
  }


  return (
    <Pagina titulo={"Cadastro de Aluno"}>

      {/* Formulário de Cadastro de Aluno */}
      <Formik
        initialValues={initialValues}
        onSubmit={cadastrar}
      >
        {({ values, handleSubmit, handleReset, handleChange }) => (
          <Form onSubmit={handleSubmit}>

            <Row className='mb-2'>
              <Form.Group as={Col}>
                <Form.Label>Nome:</Form.Label>
                <Form.Control
                  name='nome'
                  type='text'
                  value={values.nome}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Sobrenome:</Form.Label>
                <Form.Control
                  name='sobrenome'
                  type='text'
                  value={values.sobrenome}
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className='text-end'>
              <Button onClick={handleReset} className='me-2'><FaTrash /> Limpar</Button>
              <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
            </Form.Group>


          </Form>
        )}
      </Formik>



    </Pagina>
  )
}
