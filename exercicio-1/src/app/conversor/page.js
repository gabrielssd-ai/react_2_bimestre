'use client';

import React, { useState } from 'react';
import Pagina from '@/components/Pagina';
import { Container } from 'react-bootstrap';

export default function Page() {
  const [valorReais, setValorReais] = useState('');
  const [moeda, setMoeda] = useState('dolar');
  const [resultado, setResultado] = useState(null);

  const taxasConversao = {
    dolar: 0.2,
    euro: 0.18,
    bitcoin: 0.000003,
  };

  const handleConvert = () => {
    if (!valorReais || isNaN(valorReais)) {
      alert('Por favor, insira um valor numérico válido.');
      return;
    }
    const valorConvertido = (valorReais * taxasConversao[moeda]).toFixed(6);
    setResultado(valorConvertido);
  };

  const handleClear = () => {
    setValorReais('');
    setMoeda('dolar');
    setResultado(null);
  };

  return (
    <Pagina titulo="Conversor de Moedas">
      <Container style={styles.container}>
        <h2>Conversor de Moedas</h2>
        <div style={styles.formGroup}>
          <label>Valor em Reais (R$):</label>
          <input
            type="number"
            value={valorReais}
            onChange={(e) => setValorReais(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label>Moeda de Destino:</label>
          <select
            value={moeda}
            onChange={(e) => setMoeda(e.target.value)}
            style={styles.select}
          >
            <option value="dolar">Dólar</option>
            <option value="euro">Euro</option>
            <option value="bitcoin">Bitcoin</option>
          </select>
        </div>
        <button onClick={handleConvert} style={styles.button}>Converter</button>
        <button onClick={handleClear} style={{ ...styles.button, backgroundColor: '#f00' }}>Limpar</button>
        {resultado && (
          <div style={styles.result}>
            <h3>Resultado:</h3>
            <p>
              {resultado} {moeda === 'bitcoin' ? 'BTC' : moeda === 'dolar' ? 'USD' : 'EUR'}
            </p>
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
