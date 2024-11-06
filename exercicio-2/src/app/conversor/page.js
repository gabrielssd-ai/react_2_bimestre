'use client';

import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Pagina from '@/components/Pagina';
import { Container } from 'react-bootstrap';
import { FaDollarSign, FaEuroSign, FaBitcoin } from 'react-icons/fa';

export default function Page() {
  const [resultado, setResultado] = useState(null);
  const [moeda, setMoeda] = useState('dolar');

  const taxasConversao = {
    dolar: 0.2,
    euro: 0.18,
    bitcoin: 0.000003,
  };

  const handleConvert = (values) => {
    const { valorReais } = values;
    const valorConvertido = (valorReais * taxasConversao[moeda]).toFixed(6);
    setResultado(valorConvertido);
  };

  const renderIcon = () => {
    switch (moeda) {
      case 'dolar':
        return <FaDollarSign />;
      case 'euro':
        return <FaEuroSign />;
      case 'bitcoin':
        return <FaBitcoin />;
      default:
        return null;
    }
  };

  return (
    <Pagina titulo="Conversor de Moedas">
      <Container style={styles.container}>
        <h2>Conversor de Moedas</h2>
        <Formik
          initialValues={{ valorReais: '' }}
          onSubmit={(values, { resetForm }) => {
            handleConvert(values);
            resetForm();
          }}
        >
          {({ values, handleChange }) => (
            <Form>
              <div style={styles.formGroup}>
                <label>Valor em Reais (R$):</label>
                <Field
                  type="number"
                  name="valorReais"
                  placeholder="Insira o valor"
                  onChange={handleChange}
                  value={values.valorReais}
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label>Moeda de Destino:</label>
                <Field
                  as="select"
                  name="moeda"
                  onChange={(e) => {
                    handleChange(e);
                    setMoeda(e.target.value);
                  }}
                  value={moeda}
                  style={styles.select}
                >
                  <option value="dolar">Dólar</option>
                  <option value="euro">Euro</option>
                  <option value="bitcoin">Bitcoin</option>
                </Field>
              </div>
              <button type="submit" style={styles.button}>Converter</button>
              <button
                type="button"
                onClick={() => setResultado(null)}
                style={{ ...styles.button, backgroundColor: '#f00' }}
              >
                Limpar
              </button>
            </Form>
          )}
        </Formik>
        {resultado && (
          <div style={styles.result}>
            <h3>Resultado:</h3>
            <p>{renderIcon()} {resultado} {moeda === 'bitcoin' ? 'BTC' : moeda === 'dolar' ? 'USD' : 'EUR'}</p>
          </div>
        )}
      </Container>
    </Pagina>
  );
}

const styles = {
  container: { textAlign: 'center', maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' },
  formGroup: { marginBottom: '15px' },
  input: { width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  select: { width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  button: { margin: '5px', padding: '10px 20px', borderRadius: '4px', border: 'none', backgroundColor: '#0070f3', color: '#fff', cursor: 'pointer' },
  result: { marginTop: '20px', padding: '10px', border: '1px solid #0070f3', borderRadius: '8px', backgroundColor: '#f0f8ff' },
};
