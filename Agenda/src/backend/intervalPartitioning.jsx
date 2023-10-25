import React from 'react';
//import './intervalPartitioning.css'; -> Fazer e testar

const IntervalPartitioning = ({ consultas }) => {
// Classifica as consultas com base na hora de início
  consultas.sort((a, b) => a.hora.localeCompare(b.hora));
  let medicos = 0; //variável para contar o número de médicos
  let tabela = {}; //'tabela' que será usado para armazenar as consultas agendadas para cada médico.

  /*A função 'forEach' percorre cada consulta no array consultas e executa as seguintes ações:
      - Verifica se a consulta atual pode ser agendada para um médico existente com base na hora de término da última consulta agendada.
      - Se a consulta não puder ser agendada para um médico existente, um novo médico é adicionado à contagem e a consulta é agendada para esse médico. */
  consultas.forEach((consulta) => {
    let agendado = false;
    for (let i = 1; i <= medicos; i++) {
      if (tabela[i][tabela[i].length - 1].horaFim <= consulta.hora) {
        tabela[i].push(consulta);
        agendado = true;
        break;
      }
    }
    if (!agendado) {
      medicos++;
      tabela[medicos] = [consulta];
    }
  });

  return (
    <div>
      <table className="interval-partitioning-table">
        <thead>
          <tr>
            <th>Médico</th>
            {consultas.map((consulta, index) => (
              <th key={index}>{consulta.hora}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: medicos }, (_, index) => (
            <tr key={index}>
              <td>{`Médico ${index + 1}`}</td>
              {consultas.map((_, cIndex) => (
                <td key={cIndex}>
                  {tabela[index + 1] &&
                    tabela[index + 1].find(
                      (consulta) => consulta.hora === consultas[cIndex].hora
                    )?.paciente}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntervalPartitioning;
