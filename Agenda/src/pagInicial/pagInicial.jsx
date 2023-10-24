import React from 'react';
import './pagInicial.css'

const MyHTMLComponent = () => {
    const consultas = [
        { horario: '8h - 9h', pacientes: ['Paciente Maria 15 amaaaaaaaaaaaaaaaaaa', 'Paciente Maria 15 am'] },
        { horario: '9h - 10h', pacientes: ['Paciente Maria 15 amaaaaaaaaaaaaaaaaaa', 'Paciente Maria 15 am'] },
        { horario: '10h - 11h', pacientes: ['Paciente Maria 15 amaaaaaaaaaaaaaaaaaa', 'Paciente Maria 15 am'] },
        { horario: '11h - 12h', pacientes: ['Paciente Maria 15 amaaaaaaaaaaaaaaaaaa', 'Paciente Maria 15 am'] },
        { horario: '12h - 13h', pacientes: ['Médico em horário de almoço.'] },
        { horario: '13h - 14h', pacientes: ['Médico em horário de almoço.'] },
        { horario: '14h - 15h', pacientes: [] },
        { horario: '15h - 16h', pacientes: [] },
        { horario: '16h - 17h', pacientes: [] },
        { horario: '17h - 18h', pacientes: [] },
    ];

  return (
    <div>
      <h1 className="titulo">Agenda Consultório</h1>
      <p className="divisor"></p>
      <p className="titulo_cadastra">Cadastrar Consulta</p>
      <p className="titulo_explicação">Registre o número de pacientes que requerem atendimento amanhã para determinarmos quantos médicos devem ser alocados.</p>
      <div className="container">
          <div className="info-box">
              <div className="flex">
                  <div className="info-form">
                      <div className="item_nome">
                          <label>Nome:</label>
                          <input type="text" id="nome" name="nome" required />
                      </div>

                      <div className="item_sintoma">
                          <label>Sintoma:</label>
                          <input type="text" id="sintoma" name="sintoma" required />
                      </div>
                  </div>

                  <div className="info-form2">
                      <div className="item_direita">
                          <label>Horário:</label>
                          <input type="time" id="horario" name="horario" required />
                      </div>

                      <div className="item_direita">
                          <label>Duração:</label>
                          <select id="duracao" name="duracao" required>
                            <option value="">Selecione</option>
                            <option value="30">30 minutos</option>
                            <option value="60">1 hora</option>
                          </select>
                      </div>
                  </div>
              </div>
              <div className="botao flex">
                  <button type="submit">Enviar</button>
              </div>
          </div>
      </div>

      <div>
            <div className="container_consultas flex">
                <div className="box_medico1">
                    <span className="flex nome_medico">Dr. Fulano</span>
                    {consultas.map((consulta, index) => (
                        <div key={index} className="horas">
                            <div className="box_horario flex">
                                <div className="teste flex">
                                    <span>{consulta.horario}</span>
                                    <div className="pacientes flex">
                                        {consulta.pacientes.map((paciente, index) => (
                                            <div key={index} className="box_consulta">
                                                <div className="teste2">
                                                    <span>{paciente}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="divisor_vertical"></div>
        </div>
    </div>
  );
};

export default MyHTMLComponent;
