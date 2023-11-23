import React, { useState } from "react";
import "./calculadora.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Calculadora() {
    const [num, setNum] = useState('0');
    const [antigoNum, setAntigoNum] = useState('0');
    const [operador, setOperador] = useState('');
  
    function inserirNumero(e) {
      const input = e.target.value;
  
      //não permite adicionar mais de um ponto decimal
      if (input === '.' && num.includes('.')) {
        return;
      }
  
      // Concatena os números
      setNum((prevNum) => prevNum === '0' ? input : prevNum + input);
    }
  
    function limpar() {
      setNum('0');
      setAntigoNum('0');
      setOperador('');
    }
  
    function porcentagem() {
      setNum((parseFloat(num) / 100));
    }
  
    function alterarSinal() {
      setNum((prevNum) => (parseFloat(prevNum) > 0 ? '-' : '') + Math.abs(parseFloat(prevNum)));
    }
  
    function operadorHandler(e) {
      const operadorInput = e.target.value;
  
      // Se já houver um operador, calcula o resultado antes de continuar
      if (operador) {
        calcular();
      }
  
      setOperador(operadorInput);
      setAntigoNum(num);
      setNum('0');
    }
  
    function calcular() {
      const novoNum = parseFloat(num);
  
      switch (operador) {
        case '/':
          setNum((parseFloat(antigoNum) / novoNum));
          break;
        case 'X':
          setNum((parseFloat(antigoNum) * novoNum));
          break;
        case '-':
          setNum((parseFloat(antigoNum) - novoNum));
          break;
        case '+':
          setNum((parseFloat(antigoNum) + novoNum));
          break;
        default:
          // Se não houver operador, não faz nada
          break;
      }
  
      setAntigoNum('0');
      setOperador('');
    }
  
    function calcularRaizQuadrada() {
      setNum(Math.sqrt(parseFloat(num)).toFixed(4));
    }
  

  return (
    <div className="bg-exe04">
      <Box m={4} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={1} />
          <h1 className="resultado">{num}</h1>
          <button className="laranja-fraco" onClick={limpar}>
            AC
          </button>
          <button className="laranja-fraco" onClick={alterarSinal}>
            +/-
          </button>
          <button className="roxo" onClick={porcentagem}>
            %
          </button>
          <button className="roxo" onClick={operadorHandler} value="/">
            /
          </button>
          <button className="cinza" onClick={inserirNumero} value={7}>
            7
          </button>
          <button className="cinza" onClick={inserirNumero} value={8}>
            8
          </button>
          <button className="cinza" onClick={inserirNumero} value={9}>
            9
          </button>
          <button className="roxo" onClick={operadorHandler} value="X">
            X
          </button>
          <button className="cinza" onClick={inserirNumero} value={4}>
            4
          </button>
          <button className="cinza" onClick={inserirNumero} value={5}>
            5
          </button>
          <button className="cinza" onClick={inserirNumero} value={6}>
            6
          </button>
          <button className="roxo" onClick={operadorHandler} value="-">
            -
          </button>
          <button className="cinza" onClick={inserirNumero} value={1}>
            1
          </button>
          <button className="cinza" onClick={inserirNumero} value={2}>
            2
          </button>
          <button className="cinza" onClick={inserirNumero} value={3}>
            3
          </button>
          <button className="roxo" onClick={operadorHandler} value="+">
            +
          </button>
          <button className="cinza" onClick={inserirNumero} value={0}>
            0
          </button>
          <button className="cinza" onClick={inserirNumero} value={"."}>
            ,
          </button>
          {/* <button className="cinza" style={{ visibility: "hidden" }}>
            ,
          </button> */}
          <button className="cinza" onClick={calcularRaizQuadrada}>
            √
          </button>
          <button className="roxo" onClick={calcular}>
            =
          </button>
        </div>
      </Container>
    </div>
  );
}
