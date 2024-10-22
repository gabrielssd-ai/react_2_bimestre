'use client'

import Pagina from '@/components/Pagina'
import { Formik } from 'formik'
import { Button, Form } from 'react-bootstrap'
import * as Yup from 'yup'

export default function page() {

  // Schema de validação montado com yup para usar no formik
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório")
  })

  return (
    <Pagina titulo="Cadastro de Imóveis">

      <Formik
        // Atributos do formik
        // Quais os campos e valores default(iniciais)
        initialValues={{
          proprietario: {
            nome: '',
            email: ''
          }
        }}
        // Esquema de validação dos campos com yup
        validationSchema={validationSchema}
        // Envio dos dados do formulário para alguma função
        onSubmit={values => console.log(values)}
      >
        {/* Formulário */}
        {/* Construir uma função dentro da tag do formik que retorna um jsx com
        o template do formulário
        */}
        {
          ({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => {

            // debug
            console.log("Formik >>> Debug ")
            console.log('values ->', values)
            console.log('errors ->', errors)
            console.log('touched ->', touched)

            return (
              <Form>
                <Form.Group>
                  <Form.Label>Nome:</Form.Label>
                  <Form.Control
                    name='nome'
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.nome && !errors.nome}
                    isInvalid={touched.nome && errors.nome}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.nome}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control
                    name='email'
                    type='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isValid={touched.email && !errors.email}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group>
                  <Button onClick={handleSubmit}>Enviar</Button>
                </Form.Group>

              </Form>
            )
          }
        }
      </Formik>

    </Pagina>
  )
}
