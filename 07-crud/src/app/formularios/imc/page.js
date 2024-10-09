'use client'

import Pagina from "@/components/Pagina";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";


export default function ImcPage() {

  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  const [peso, setPeso] = useState('0')
  const [altura, setAltura] = useState('0.0')

  function calcular(event) {
    event.preventDefault()
    console.log({ nome, genero, peso, altura })

  }

  return (
    <Pagina titulo="Calculadora de IMC">

      {/* Formulário */}
      <Form onSubmit={calcular}>

        <Form.Group className="mb-3">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gênero:</Form.Label>
          <Form.Select
            name="genero"
            value={genero}
            onChange={e => setGenero(e.target.value)}
          >
            <option>Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Peso:</Form.Label>
          <Form.Control
            name="peso"
            type="number"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            min={1}
            step={1}
          />
          <Form.Text>Peso em KG. Ex: 80</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Altura:</Form.Label>
          <Form.Control
            name="altura"
            type="number"
            value={altura}
            onChange={e => setAltura(e.target.value)}
            min={0.01}
            step={0.01}
          />
          <Form.Text>Altura em Metros. Ex: 1,75</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 text-center">
          <Button type="submit" variant="success">
            <FaCheck /> Calcular
          </Button>
        </Form.Group>

      </Form>

    </Pagina>
  )
}
