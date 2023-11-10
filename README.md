# Agenda Consultório

**Número da Lista**: 31<br>
**Conteúdo da Disciplina**: Greed<br>

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 202016847  |  Luciano de Freitas Melo |
| 202016945  |  Maria Eduarda dos Santos Abritta Ferreira |

## Sobre
Vídeo explicativo: https://youtu.be/AeRVBcPnpyk

O vídeo também está disponível [nesse repositório](https://raw.githubusercontent.com/projeto-de-algoritmos/Greed_AgendaConsultorio/master/Agenda/src/assets/apresentacao.mp4).

O objetivo do projeto foi aplicar o **algoritmo de dijkstra** de forma mais criativa e visual. Foi criado um jogo demonstrativo na temática de pirata, em que o jogador pode escolher um dos tesouros espalhados pelo mapa e o algoritmo de dijkstra irá mostrar o caminho mais curto até o tesouro escolhido. Por se tratar de um navio, que tem mais facilidade de se locomover por áreas de mar do que de terra, foi avaliado que o algoritmo de dijkstra seria o mais adequado para a aplicação, pois o mesmo é utilizado para encontrar o caminho mais curto entre dois pontos em um grafo ponderado.

O objetivo do projeto foi criar uma agenda temática utilizando o algoritmo de **Particionamento de Intervalo**. Foi criado uma agenda para consultorio médico, levando em conta a perspectiva de um recepcionista, em que a ideia é que o recepcionista insira os dados da consulta dos pacientes e o sistema automaticamente aloque os médicos necessários para atender todas as consultas.

## Screenshots

![screenshot 1 do projeto](/Agenda/src/assets/screenshot1.png)

![screenshot 2 do projeto](/Agenda/src/assets/screenshot2.png)

![screenshot 3 do projeto](/Agenda/src/assets/screenshot3.png)

## Instalação 
**Linguagem**: Javascript<br>
**Framework**: Vite + React<br>

Para rodar o projeto, é necessário ter o **node** instalado na máquina.

Clonar o repositório do projeto:

```
git clone https://github.com/projeto-de-algoritmos/Greed_AgendaConsultorio.git

```

Abrir pasta do projeto no terminal e a pasta do código:

```
cd GREED_AGENDACONSULTORIO
cd Agenda
```

Instalar as dependências e rodar o projeto: 

```
npm install
npm run dev
```

O projeto abrirá na url:
http://localhost:5173/

## Uso 
Inserir informações dos pacientes no formulário e enviar. Podem ser cadastrados quantos pacientes forem necessários.