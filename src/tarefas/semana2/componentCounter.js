import React, { useState } from "react";
import "./componentCounter.css";
import imgMan from "./img/modelo2-H.png";
import imgWoman from "./img/modelo2-M.png";
import reset from "./img/reset.png";
import add from "./img/add1.png";
import remove from "./img/remove1.png";

export default function ComponentCounter() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const resetContadores = () => {
    setHomens(0);
    setMulheres(0);
  };

  const addMan = () => {
    setHomens(homens + 1);
  };

  const removeMan = () => {
    setHomens(homens - 1);
  };

  const addWoman = () => {
    setMulheres(mulheres + 1);
  };

  const removeWoman = () => {
    setMulheres(mulheres - 1);
  };

  return (
    <div className="bg-exe2">
      <div className="card-exe2">
        <h1 className="title-exe2">Contador de Pessoas</h1>

        <div className="principal-box-exe2">
          <div className="first-card-exe2">
            <div className="contador">
              <h2>Total: {homens + mulheres}</h2>
            </div>

            <div>
              <img
                src={reset}
                alt="Reset"
                onClick={resetContadores}
                className="button-reset-exe2"
              />
            </div>
          </div>

          <div className="principal-card-exe2">
            <div>
              <img
                src={imgMan}
                alt="man icon"
                onClick={resetContadores}
                className="img-man-exe2"
              />

              <div className="container-homens">
                <div>
                  <img
                    src={add}
                    alt="add icon"
                    onClick={addMan}
                    className="add-button-man-exe2"
                  />
                  <img
                    src={remove}
                    alt="remove icon"
                    onClick={removeMan}
                    className="remove-button-man-exe2"
                  />
                </div>
                <h3 className="card-border-man">Homens: {homens}</h3>
              </div>
            </div>

            <div>
              <img
                src={imgWoman}
                alt="woman icon"
                onClick={resetContadores}
                className="img-woman-exe2"
              />

              <div className="container-mulheres">
                <div>
                  <img
                    src={add}
                    alt="add icon"
                    onClick={addWoman}
                    className="add-button-woman-exe2"
                  />
                  <img
                    src={remove}
                    alt="remove icon"
                    onClick={removeWoman}
                    className="remove-button-woman-exe2"
                  />
                </div>
                <h3 className="card-border-woman">Mulheres: {mulheres}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

// export default ComponentCounter;
