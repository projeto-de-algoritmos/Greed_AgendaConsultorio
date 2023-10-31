import styled from 'styled-components';

const nomeDosMedicos = ['Drauzio Varas', 'Drauzio Valandro', 'Drauzio Veras', 'Drauzio Varella Júnior', 'Drauzio Valente', 'Drauzio Verelli', 'Drauzio Vasques', 'Drauzio Veloso', 'Drauzio Varelli', 'Drauzio Vasconcelos', 'Drauzio Varella Filho', 'Drauzio Veron', 'Drauzio Velasquez', 'Drauzio Vicente', 'Drauzio Valença'];

const Wrapper = styled.section`
    width: 95%;
    padding: 0 10px;
    display: grid;
    grid-template-columns: 2fr repeat(10, 1fr);
    grid-auto-rows: min-content;
`;

const Item = styled.div`
    grid-column-start: ${props => props.colstart};
    grid-column-end: ${props => props.colend};
    grid-row-start: ${props => props.row};
    text-align: center;
    border: 1px solid #ccc;

    h1{
        font-size: 16px;
        margin: 0.1em;
    }
    h2{
        font-size: 12px;
        margin: 0.2em;
    }
`


export const AgendaDisplay = ({consultas}) => {

    function horariosConsulta() {
        let horarios = ["Horários"];
        for (let i = 8; i < 18; i++) {
            horarios.push(`${i}h - ${i+1}h`);
        }
        return horarios;
    }

    
    const horarios = horariosConsulta();
   
    return(
        <div className="horas-container">
            <div className="titulo-horas">
                <span className="flex nome_medico">Pacientes</span>
            </div>
            <Wrapper>
                {horarios.map((horario, index) => (
                    <Item key={index} colstart={index + 1} colend={index + 2} row={1}>
                        <span className="hora-text">{horario}</span>
                    </Item>
                ))}

                {consultas.map((medicos, id) => (
                    <>
                        <Item key={id} colstart={1} colend={2} row={id+2}>
                            <span className="hora-text">{nomeDosMedicos[id]}</span>
                        </Item>

                        {medicos.map((consulta, index) => (
                            <Item 
                                key={index} 
                                colstart={consulta.horaInicio-6} 
                                colend={consulta.horaFim-6} 
                                row={id+2}
                            >
                                <h1 className='hora-text'>{consulta.nome}</h1>
                                <h2 className="hora-text">
                                    {consulta.sintoma}
                                </h2>
                            </Item>
                        ))}
                    
                    </>
                ))}
                
               
            </Wrapper>
        </div> 
    )
}

