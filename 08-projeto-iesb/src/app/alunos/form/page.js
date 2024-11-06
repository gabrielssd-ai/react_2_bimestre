'use client'
import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { useRouter } from 'next/navigation'
import React from 'react'
import ReactInputMask from 'react-input-mask'
import { Button, Col, Form, Row } from 'react-bootstrap'
import * as Yup from 'yup'
import { v4 } from 'uuid'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'

export default function page(props) {
const router  = useRouter()
const alunos = JSON.parse(localStorage.getItem('alunos') || '[]')
const faculdades = JSON.parse(localStorage.getItem('faculdades') || '[]')
const cursos = JSON.parse(localStorage.getItem('cursos') || '[]')
const id= props.searchParams.id
console.log(props.searchParams.id)
const alunoEditado = alunos.find(item => item.id == id)

function salvar(dados){
    if (alunoEditado){
        Object.assign(alunoEditado, dados)
        localStorage.setItem('alunos', JSON.stringify(alunos))
    }else{
        dados.id = v4()
        alunos.push(dados)
        localStorage.setItem('alunos', JSON.stringify(alunos) )
    }
    alert("aluno criado com sucesso")
    router.push('/alunos')
}
const initialValues = {
    nome: '',
    sobrenome: '',
    email: '',
    dataNascimento: '',
    telefone: '',
    faculdade: '',
    curso: '',
    periodo: '',
    matricula: '',
    foto: ''
}

const validationSchema = Yup.object().shape({
nome: Yup.string().required("Campo Obrigatorio"),
sobrenome: Yup.string().required("Campo Obrigatorio"),
email: Yup.string().email("Email Invalido").required("Campo Obrigatorio"),
dataNascimento: Yup.date().required("Campo Obrigatorio"),
telefone: Yup.string().required("Campo Obrigatorio"),
faculdade: Yup.string().required("Campo Obrigatorio"),
curso: Yup.string().required("Campo Obrigatorio"),
periodo: Yup.string().required("Campo Obrigatorio"),
matricula: Yup.string().length(11).required('Campo Obrigatório'),
foto: Yup.string().required("Campo Obrigatorio"),
})

  return (
    <Pagina titulo={"Cadastro de Alunos"}>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={salvar}
        >
            {({values, errors, touched, handleBlur, handleSubmit, handleChange, handleReset})=>{
                return(
                    <Form onSubmit={handleSubmit}>
                        <div>
                            <h1>Dados Pessoais</h1>
                            <hr/>
                        </div>
                      <Row>
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

                        <Form.Group as={Col}>
                            <Form.Label>Sobrenome:</Form.Label>
                            <Form.Control 
                            name='sobrenome'
                            type='text'
                            m
                            value={values.sobrenome}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.sobrenome && !errors.sobrenome}
                            isInvalid={touched.sobrenome && errors.sobrenome}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.sobrenome}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control 
                            name='email'
                            type='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && errors.email}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Data de Nascimento:</Form.Label>
                            <Form.Control 
                            name='dataNascimento'
                            type='date'
                            value={values.dataNascimento}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.dataNascimento && !errors.dataNascimento}
                            isInvalid={touched.dataNascimento && errors.dataNascimento}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.dataNascimento}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control as={ReactInputMask}
                            name='telefone'
                            type='text'
                            mask={"(99)99999-9999"}
                            value={values.telefone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.telefone && !errors.telefone}
                            isInvalid={touched.telefone && errors.telefone}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.telefone}</Form.Control.Feedback>
                        </Form.Group>

                        </Row>

                        <Row>
                        <div>
                            <h1>Academico</h1>
                            <hr/>
                        </div>
                        <Form.Group as={Col}>
                            <Form.Label>Faculdade:</Form.Label>
                            <Form.Select
                            name='faculdade'
                            type='text'
                            value={values.faculdade}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.faculdade && !errors.faculdade}
                            isInvalid={touched.faculdade && errors.faculdade}
                            >
                            <option value='' >Selecione</option>
                            {faculdades.map(faculdade=><option value={faculdade.nome}>{faculdade.nome}</option> )}
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>{errors.faculdade}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Curso:</Form.Label>
                            <Form.Select
                            name='curso'
                            type='text'
                            value={values.curso}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.curso && !errors.curso}
                            isInvalid={touched.curso && errors.curso}
                            >
                            <option value='' >Selecione</option>
                            {cursos.map(curso=><option value={curso.nome}>{curso.nome}</option> )}
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>{errors.curso}</Form.Control.Feedback>
                        </Form.Group>
                        </Row>

                        <Row>
                        <Form.Group as={Col}>
                            <Form.Label>Periodo:</Form.Label>
                            <Form.Select
                            name='periodo'
                            type='text'
                            value={values.periodo}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.periodo && !errors.periodo}
                            isInvalid={touched.periodo && errors.periodo}
                            >
                             <option value='' >Selecione</option>
                             <option>Matutino</option>
                             <option>Vespertino</option>
                             <option>Noturno</option>
                            </Form.Select>
                            <Form.Control.Feedback type='invalid'>{errors.periodo}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Matricula:</Form.Label>
                            <Form.Control as={ReactInputMask}
                            name='matricula'
                            type='text'
                            mask={'99999999999'}
                            value={values.matricula}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.matricula && !errors.matricula}
                            isInvalid={touched.matricula && errors.matricula}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.matricula}</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Foto:</Form.Label>
                            <Form.Control 
                            name='foto'
                            type='text'
                            value={values.foto}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isValid={touched.foto && !errors.foto}
                            isInvalid={touched.foto && errors.foto}
                            />
                            <Form.Control.Feedback type='invalid'>{errors.foto}</Form.Control.Feedback>
                        </Form.Group>
                         </Row>
                <Form.Group className='text-end'>
                  <Button className='me-2' href='/faculdades'><FaArrowLeft /> Voltar</Button>
                  <Button type='submit' variant='success'><FaCheck /> Enviar</Button>
                </Form.Group>
                    </Form>
                )
            }}

        </Formik>

    </Pagina>
  )
}
