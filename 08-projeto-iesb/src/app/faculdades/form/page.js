'use client'

import Pagina from '@/components/Pagina'
import apiLocalidades from '@/services/apiLocalidades'
import { Formik } from 'formik'
import { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa"
import * as Yup from 'yup'


export default function FaculdadeFormPage() {

  // Criar estados(react) para armazenar os dados dos selects
  const [paises, setPaises] = useState([])
  const [estados, setEstados] = useState([])
  const [cidades, setCidades] = useState([])

  // carregar os dados na inicialização da página
  useEffect(() => {
    apiLocalidades.get('/paises').then(response => {
      console.log("paises >>> ", response.data)
      setPaises(response.data)
    })

    apiLocalidades.get("estados?orderBy=nome").then(response => {
      console.log("estados >>> ", response.data)
      setEstados(response.data)
    })

  }, [])

  // função para salvar os dados do form
  function salvar(dados) {
    console.log(dados)
  }

  // Campos do form e valores iniciais(default)
  const initialValues = {
    nome: '',
    pais: '',
    estado: '',
    cidade: '',
    endereco: ''
  }

  // Esquema de validação com Yup
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    pais: Yup.string().required("Campo obrigatório"),
    estado: Yup.string(),
    cidade: Yup.string(),
    endereco: Yup.string().required("Campo obrigatório")
  })

  return (
    <Pagina titulo={"Cadastro de Faculdade"}>

      {/* Formulário */}

      <Formik
        // Atributos do formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
      >
        {/* construção do template do formulário */}
        {
          // os valores e funções do formik
          ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {
            // construir o form
            // ações do formulário
            // debug
            // console.log("DEBUG >>>")
            // console.log({values, errors, touched})


            // retorno com o template jsx do formulário
            return (
              <Form onSubmit={handleSubmit}>
                {/* Campos do form */}
                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                      name='nome'
                      type='text'
                      value={values.nome}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.nome && !errors.nome}
                      isInvalid={touched.nome && errors.nome}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.nome}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Endereco:</Form.Label>
                    <Form.Control
                      name='endereco'
                      type='text'
                      value={values.endereco}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.endereco && !errors.endereco}
                      isInvalid={touched.endereco && errors.endereco}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.endereco}</Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Row className='mb-2'>
                  <Form.Group as={Col}>
                    <Form.Label>Pais:</Form.Label>
                    <Form.Select
                      name='pais'
                      value={values.pais}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.pais && !errors.pais}
                      isInvalid={touched.pais && errors.pais}
                    >
                      <option value="">Selecione</option>
                      {paises.map(pais => <option value={pais.nome}>{pais.nome}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.pais}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Estado:</Form.Label>
                    <Form.Select
                      name='estado'
                      value={values.estado}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.estado && !errors.estado}
                      isInvalid={touched.estado && errors.estado}
                    >
                      <option value="">Selecione</option>
                      {estados.map(estado => <option value={estado.sigla}>{estado.sigla}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.estado}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Select
                      name='cidade'
                      value={values.cidade}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isValid={touched.cidade && !errors.cidade}
                      isInvalid={touched.cidade && errors.cidade}
                    >
                      <option value="">Selecione</option>
                      <option value="Ceilândia">Ceilândia</option>
                    </Form.Select>
                    <Form.Control.Feedback type='invalid'>{errors.cidade}</Form.Control.Feedback>
                  </Form.Group>

                </Row>

                {/* botões */}
                <Form.Group className='text-end'>
                  <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
                </Form.Group>



              </Form>
            )

          }
        }
      </Formik>

    </Pagina>
  )
}
