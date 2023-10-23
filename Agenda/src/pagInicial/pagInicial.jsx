import React from 'react';
import './pagInicial.css'

const MyHTMLComponent = () => {
  return (
    <div>
      <h1 className="titulo">Agenda Consultório</h1>
      <p className="divisor"></p>
      <p className="titulo_cadastra">Cadastrar Consulta</p>
      <div className="container">
          <div className="info-box">
              <div className="flex">
                  <div className="info-form">
                      <div className="item_nome">
                          <label>Nome:</label>
                          <input type="text" id="nome" name="nome" required />
                      </div>

                      <div className="item_telefone">
                          <label>Telefone:</label>
                          <input type="text" id="telefone" name="telefone" required />
                      </div>
                  </div>

                  <div className="info-form2">
                      <div className="item_direita">
                          <label>Sintomas:</label>
                          <input type="text" id="sintomas" name="sintomas" required />
                      </div>

                      <div className="item_direita">
                          <label>Horário:</label>
                          <input type="time" id="horario" name="horario" required />
                      </div>
                  </div>
              </div>
              <div className="botao flex">
                  <button type="submit">Enviar</button>
              </div>
          </div>
      </div>

      <div className="container_medicos flex">
          <div className="box_medico1">
              <span className="flex">Dr. Fulano</span>
          </div>
          <div className="divisor_vertical"></div>
          <div className="box_medico2">
              <span className="flex">Dr. Ciclano</span>
          </div>
      </div>
    </div>
  );
};

export default MyHTMLComponent;
