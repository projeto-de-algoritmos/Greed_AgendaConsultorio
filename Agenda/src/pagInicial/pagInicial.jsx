import React, { useEffect, useState } from 'react';
import './pagInicial.css'
import { intervalPartitioning } from '../backend/intervalPartioning';
import { AgendaDisplay } from '../agendaDisplay/agendaDisplay';

const MyHTMLComponent = () => {

    const [consultas, setConsultas] = useState([]);
    const [pacientes, setPacientes] = useState([]);

    const handleEnviar = (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const sintoma = document.getElementById('sintoma').value;
        const horario = document.getElementById('horario').value;
        const duracao = document.getElementById('duracao').value;

        if (!nome || !sintoma || !horario || !duracao) {
            alert('Preencha todos os campos.');
            return;
        }
        
        const novoPaciente = {
            nome,
            sintoma,
            horaInicio: parseInt(horario),
            horaFim: parseInt(horario) + parseInt(duracao),
        };

        setPacientes([...pacientes, novoPaciente]);

        // Exibir a notificação de cadastro bem-sucedido
        alert('Paciente cadastrado com sucesso.');

        // Limpar os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('sintoma').value = '';
        document.getElementById('horario').value = '';
        document.getElementById('duracao').value = '';
    };

    useEffect(() => {
        setConsultas(intervalPartitioning(pacientes));
    }, [pacientes, setConsultas]);


    const renderHorarioOptions = () => {
        let options = []
        for (let i = 8; i < 18; i++) {
            options.push(<option value={i}>{i}hrs</option>)
        }
        return options;
    }

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
                            <select id="horario" name="horario" required>
                                <option value="">Selecione</option>
                                {renderHorarioOptions()}
                            </select>
                        </div>

                        <div className="item_direita">
                            <label>Duração:</label>
                            <select id="duracao" name="duracao" required>
                                <option value="">Selecione</option>
                                <option value="1">1 hora</option>
                                <option value="2">2 horas</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="botao flex">
                    <button type="submit" onClick={(e) => handleEnviar(e)}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>

        <AgendaDisplay consultas={consultas} />
        
    </div>
    );
};

export default MyHTMLComponent;
