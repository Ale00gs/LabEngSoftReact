import React, { useState, useEffect } from "react";
import "./jogomemo.css";
import interrogacao from "./img/interrogacao.png";
import reiniciar from "./img/reiniciar.png";

const imagens = [
  require("./img/1.png"),
  require("./img/2.png"),
  require("./img/3.png"),
  require("./img/4.png"),
  require("./img/5.png"),
  require("./img/6.png"),
  require("./img/7.png"),
  require("./img/8.png"),
  require("./img/9.png"),
  require("./img/10.png"),
];

const JogoMemo = () => {
  const [cartas, setCartas] = useState([]); // armazena as cartas do jogo
  const [cartasViradas, setCartasViradas] = useState([]); // armazena as cartas viradas pelo usuário
  const [paresEncontrados, setParesEncontrados] = useState([]); // armazena os pares de cartas encontrados


  useEffect(() => {
    reiniciarJogo(); // Inicializa o jogo
  }, []); // Executa apenas uma vez ao montar o componente

  // Função para reiniciar o jogo
  const reiniciarJogo = () => {
    const cartasDuplicadas = [...imagens, ...imagens];
    const cartasEmbaralhadas = cartasDuplicadas.sort(() => Math.random() - 0.5);
    setCartas(cartasEmbaralhadas);
    setCartasViradas([]);
    setParesEncontrados([]);
  };

  // para inicializar o jogo
  useEffect(() => {
    const cartasDuplicadas = [...imagens, ...imagens]; // duplicar as imagens e formar pares
    const cartasEmbaralhadas = cartasDuplicadas.sort(() => Math.random() - 0.5);
    setCartas(cartasEmbaralhadas); // Inicializa o estado das cartas
  }, []);

  // Função para virar uma carta
  const virarCarta = (index) => {
    if (cartasViradas.length < 2) {
      // verifica se já existem duas cartas viradas
      setCartasViradas([...cartasViradas, index]); // adiciona a carta virada ao estado
    }
  };

  // usei o effect para verificar se dois pares de cartas foram virados
  useEffect(() => {
    if (cartasViradas.length === 2) {
      const [index1, index2] = cartasViradas;

      if (cartas[index1] === cartas[index2]) {
        // Verifica se os pares de cartas são iguais
        setParesEncontrados([...paresEncontrados, cartas[index1]]); // Adiciona o par encontrado ao estado
      }

      setTimeout(() => setCartasViradas([]), 800); // Limpa as cartas viradas após um breve intervalo
    }
  }, [cartasViradas, cartas, paresEncontrados]);

  // Função para verificar se uma carta está virada
  const isCartaVirada = (index) =>
    cartasViradas.includes(index) || paresEncontrados.includes(cartas[index]);

  return (
    <div className="bg-exe5">
         <img src={reiniciar} className="imagem-reiniciar" onClick={reiniciarJogo}/>
      <div className="carta-container">
        {cartas.map((imagem, index) => (
          <div key={index} className="carta" onClick={() => virarCarta(index)}>
            {isCartaVirada(index) ? (
              // Exibe a imagem se a carta estiver virada
              <img
                src={imagem}
                alt={`Carta ${index}`}
                className="imagem-carta"
              />
            ) : (
              // Exibe o ponto de interrogação se a carta não estiver virada
              <img src={interrogacao} className="imagem-interrogacao" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JogoMemo;
