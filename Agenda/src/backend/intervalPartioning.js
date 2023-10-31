import { MinHeap } from "./minHeap.js";



export function intervalPartitioning (consultas){

    const heap = new MinHeap(); //cria um novo minHeap

    // ordena as consultas com base na hora de início
    consultas.sort((a, b) => a.horaInicio < b.horaInicio ? -1 : a.horaInicio > b.horaInicio ? 1 : 0);

    let medicos = 0; //variável para contar o número de médicos
    let tabela = []; //'tabela' que será usado para armazenar as consultas agendadas para cada médico.

    tabela[0] = []; //inicia a tabela com um médico e um consultorio vazio

    heap.push({horaFim: -1, medico: medicos++, consultas: tabela[0]}) // inicia o heap com um consultorio disponivel com o medico 1

    consultas.forEach(consulta => {
        
        let raizHeap = heap.peek(); // pega a raiz do heap
        if(raizHeap.horaFim <= consulta.horaInicio){
            raizHeap.horaFim = consulta.horaFim; // atualiza a hora de fim da consulta para o médico
            raizHeap.consultas.push(consulta); // adiciona a consulta na lista de consultas do médico
            
            heap.heapify(0); // reorganiza o heap
        }
        else {
            tabela[medicos] = [consulta]; // cria um novo consultorio
            let novoMedico = {horaFim: consulta.horaFim, medico: medicos, consultas: tabela[medicos]}; // cria um novo médico
            heap.push(novoMedico); // adiciona o médico no heap
            medicos++;
        }

    });

    return tabela;
}

//    {nome: "Alberto", sintoma: "gripe", horaInicio: 8, horaFim: 9},

