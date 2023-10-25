import React, { useState, useEffect } from 'react';
import { getListaPacientes, salvarListaPacientes } from '../backend/utils';
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

    const [pacientes, setPacientes] = useState(getListaPacientes());

    const handleEnviar = () => {
        const nome = document.getElementById('nome').value;
        const sintoma = document.getElementById('sintoma').value;
        const horario = document.getElementById('horario').value;
        const duracao = document.getElementById('duracao').value;
    
        const novoPaciente = {
            nome,
            sintoma,
            horario,
            duracao,
        };
    
        const novaListaPacientes = [...pacientes, novoPaciente];
        setPacientes(novaListaPacientes);
        salvarListaPacientes(novaListaPacientes);
    
        // Exibir a notificação de cadastro bem-sucedido
        alert('Paciente cadastrado com sucesso.');
    
        // Limpar os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('sintoma').value = '';
        document.getElementById('horario').value = '';
        document.getElementById('duracao').value = '';

        // Para verificar o conteúdo do localStorage
        console.log(localStorage);

        // Para verificar um item específico do localStorage
        const listaPacientes = localStorage.getItem('listaPacientes');
        console.log(listaPacientes);
    };

    useEffect(() => {
        //limpar o localStorage quando der f5
        window.addEventListener('beforeunload', () => {
          localStorage.clear();
        });
    }, []);

    return (
        <div>
        <h1 className="titulo">Agenda Consultório</h1>
        <p className="divisor"></p>
        <p className="titulo_cadastra">Cadastrar Pacientes</p>
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
                    <button type="submit" onClick={handleEnviar}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>

        <div className="horas-container">
            <div className="titulo-horas">
                <span className="flex nome_medico">Pacientes</span>
            </div>
            <div className="horas-list">
                {consultas.map((consulta, index) => (
                <div key={index} className="hora">
                    <span className="hora-text">{consulta.horario}</span>
                    {index !== consultas.length - 1 && <span className="separator">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                </div>
                ))}
            </div>
        </div>'
        </div>
    );
};

export default MyHTMLComponent;
