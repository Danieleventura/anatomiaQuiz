/* Aula 20 MaiaQuiz  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')
let imagem   = document.querySelector('#foto')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// RESPOSTA
let resposta2 = document.querySelector('#resposta')
let pergunta2 = document.querySelector('#pergunta2')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    alternativaA : "Osso frontal",
    alternativaB : "Osso occipital",
    alternativaC : "Osso parietal",
    correta      : "Osso frontal",
}

const q2 = {
    numQuestao   : 2,
    alternativaA : "Fossa posterior do crânio",
    alternativaB : "Fossa média do crânio",
    alternativaC : "Fossa anterior do crânio",
    correta      : "Fossa anterior do crânio",
}

const q3 = {
    numQuestao   : 3,
    alternativaA : "Atlas",
    alternativaB : "Vértebras cervicais",
    alternativaC : "Arco anterior do atlas",
    correta      : "Vértebras cervicais",
}

const q4 = {
    numQuestao   : 4,
    alternativaA : "Músculo reto posterior maior da cabeça",
    alternativaB : "Músculo reto posterior menor da cabeça",
    alternativaC : "Músculo oblíquo inferior da cabeça﻿",
    correta      : "Músculo reto posterior maior da cabeça",
}

const q5 = {
    numQuestao   : 5,
    alternativaA : "Músculo serrátil posterior superior",
    alternativaB : "Músculo trapézio",
    alternativaC : "Músculo latíssimo do dorso",
    correta      : "Músculo latíssimo do dorso",
}

const q6 = {
    numQuestao   : 6,
    alternativaA : "1.ª-7.ª costelas",
    alternativaB : "Falsa costela",
    alternativaC : "Costelas flutuantes",
    correta      : "1.ª-7.ª costelas",
}

const q7 = {
    numQuestao   : 7,
    alternativaA : "Processo transverso do atlas",
    alternativaB : "Arco posterior do atlas",
    alternativaC : "Tubérculo posterior do atlas",
    correta      : "Processo transverso do atlas",
}

const q8 = {
    numQuestao   : 8,
    alternativaA : "Músculo iliocostal",
    alternativaB : "Músculo Estribo.",
    alternativaC : "Músculo longuíssimo",
    correta      : "Músculo longuíssimo",
}

const q9 = {
    numQuestao   : 9,
    alternativaA : "Vértebra lombar",
    alternativaB : "Vértebra L1",
    alternativaC : "Vértebra L2",
    correta      : "Vértebra lombar",
}

const q10 = {
    numQuestao   : 10,
    alternativaA : "Tubérculo mentual da mandíbula",
    alternativaB : "Protuberância mentual da mandíbula",
    alternativaC : "Corpo da mandíbula",
    correta      : "Corpo da mandíbula",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')
let numeroDaQuestao = 1;
numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')


function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)
    if(respostaEscolhida == certa) {
        pontos += 10 // pontos = pontos + 10
        if(certa == questoes[numeroDaQuestao].alternativaA){
            a.classList.add('questaoCerta')
        } else if(certa == questoes[numeroDaQuestao].alternativaB){
            b.classList.add('questaoCerta')
        } else if(certa == questoes[numeroDaQuestao].alternativaC){
            c.classList.add('questaoCerta')
        }
    } else {
        if(certa == questoes[numeroDaQuestao].alternativaA){
            a.classList.add('questaoCerta')
        } else if(certa == questoes[numeroDaQuestao].alternativaB){
            b.classList.add('questaoCerta')
        } else if(certa == questoes[numeroDaQuestao].alternativaC){
            c.classList.add('questaoCerta')
        }

        if(respostaEscolhida == questoes[numeroDaQuestao].alternativaA){
            a.classList.add('questaoErrada')
        } else if(respostaEscolhida == questoes[numeroDaQuestao].alternativaB){
            b.classList.add('questaoErrada')
        } else if(respostaEscolhida == questoes[numeroDaQuestao].alternativaC){
            c.classList.add('questaoErrada')
        }
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    //bloquearAlternativas()
    document.querySelector('.next').style.display = 'block';
    /*setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()*/
}

function proximaQuestao(){
    proxima = numeroDaQuestao+1
    document.querySelector('.next').style.display = 'none';

    a.classList.remove('questaoCerta')
    b.classList.remove('questaoCerta')
    c.classList.remove('questaoCerta')
    a.classList.remove('questaoErrada')
    b.classList.remove('questaoErrada')
    c.classList.remove('questaoErrada')
        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            numero.textContent = proxima
            numQuestao.textContent = questoes[proxima].numQuestao
            a.textContent = questoes[proxima].alternativaA
            b.textContent = questoes[proxima].alternativaB
            c.textContent = questoes[proxima].alternativaC
            a.setAttribute('value', proxima+'A')
            b.setAttribute('value', proxima+'B')
            c.setAttribute('value', proxima+'C')
            if(proxima == 1){
                document.getElementById('foto1').style.display= 'block';
                document.getElementById('foto2').style.display= 'none';
                document.getElementById('foto3').style.display= 'none';
                document.getElementById('foto4').style.display= 'none';
                document.getElementById('foto5').style.display= 'none';
                document.getElementById('foto6').style.display= 'none';
                document.getElementById('foto7').style.display= 'none';
                document.getElementById('foto8').style.display= 'none';
                document.getElementById('foto9').style.display= 'none';
                document.getElementById('foto10').style.display= 'none';
            } else if(proxima == 2){
                document.getElementById('foto2').style.display= 'block';
                document.getElementById('foto1').style.display= 'none';
                document.getElementById('foto3').style.display= 'none';
                document.getElementById('foto4').style.display= 'none';
                document.getElementById('foto5').style.display= 'none';
                document.getElementById('foto6').style.display= 'none';
                document.getElementById('foto7').style.display= 'none';
                document.getElementById('foto8').style.display= 'none';
                document.getElementById('foto9').style.display= 'none';
                document.getElementById('foto10').style.display= 'none';
            } else if(proxima == 3){
                document.getElementById('foto3').style.display= 'block';
                document.getElementById('foto2').style.display= 'none';
                document.getElementById('foto1').style.display= 'none';
                document.getElementById('foto4').style.display= 'none';
                document.getElementById('foto5').style.display= 'none';
                document.getElementById('foto6').style.display= 'none';
                document.getElementById('foto7').style.display= 'none';
                document.getElementById('foto8').style.display= 'none';
                document.getElementById('foto9').style.display= 'none';
                document.getElementById('foto10').style.display= 'none';
            } else if(proxima == 4){
                document.getElementById('foto4').style.display= 'block';
                document.getElementById('foto2').style.display= 'none';
                document.getElementById('foto1').style.display= 'none';
                document.getElementById('foto3').style.display= 'none';
                document.getElementById('foto5').style.display= 'none';
                document.getElementById('foto6').style.display= 'none';
                document.getElementById('foto7').style.display= 'none';
                document.getElementById('foto8').style.display= 'none';
                document.getElementById('foto9').style.display= 'none';
                document.getElementById('foto10').style.display= 'none';
            } else if(proxima == 5){
                document.getElementById('foto5').style.display= 'block';
                document.getElementById('foto2').style.display= 'none';
                document.getElementById('foto1').style.display= 'none';
                document.getElementById('foto4').style.display= 'none';
                document.getElementById('foto3').style.display= 'none';
                document.getElementById('foto6').style.display= 'none';
                document.getElementById('foto7').style.display= 'none';
                document.getElementById('foto8').style.display= 'none';
                document.getElementById('foto9').style.display= 'none';
                document.getElementById('foto10').style.display= 'none';
            } else if(proxima == 6){
                document.getElementById('foto6').style.display= 'block';
                document.getElementById('foto2').style.display= 'none';
                document.getElementById('foto1').style.display= 'none';
                document.getElementById('foto4').style.display= 'none';
                document.getElementById('foto5').style.display= 'none';
                document.getElementById('foto3').style.display= 'none';
                document.getElementById('foto7').style.display= 'none';
                document.getElementById('foto8').style.display= 'none';
                document.getElementById('foto9').style.display= 'none';
                document.getElementById('foto10').style.display= 'none';
            } else if(proxima == 7){
                document.getElementById('foto7').style.display= 'block';
                document.getElementById('foto2').style.display= 'none';
                document.getElementById('foto1').style.display= 'none';
                document.getElementById('foto4').style.display= 'none';
                document.getElementById('foto5').style.display= 'none';
                document.getElementById('foto6').style.display= 'none';
                document.getElementById('foto3').style.display= 'none';
                document.getElementById('foto8').style.display= 'none';
                document.getElementById('foto9').style.display= 'none';
                document.getElementById('foto10').style.display= 'none';
            } else if(proxima == 8){
                document.getElementById('foto8').style.display= 'block';
                document.getElementById('foto2').style.display= 'none';
                document.getElementById('foto1').style.display= 'none';
                document.getElementById('foto4').style.display= 'none';
                document.getElementById('foto5').style.display= 'none';
                document.getElementById('foto6').style.display= 'none';
                document.getElementById('foto7').style.display= 'none';
                document.getElementById('foto3').style.display= 'none';
                document.getElementById('foto9').style.display= 'none';
                document.getElementById('foto10').style.display= 'none';
            } else if(proxima == 9){
                document.getElementById('foto9').style.display= 'block';
                document.getElementById('foto2').style.display= 'none';
                document.getElementById('foto1').style.display= 'none';
                document.getElementById('foto4').style.display= 'none';
                document.getElementById('foto5').style.display= 'none';
                document.getElementById('foto6').style.display= 'none';
                document.getElementById('foto7').style.display= 'none';
                document.getElementById('foto8').style.display= 'none';
                document.getElementById('foto3').style.display= 'none';
                document.getElementById('foto10').style.display= 'none';
            } else if(proxima == 10){
                document.getElementById('foto10').style.display= 'block';
                document.getElementById('foto2').style.display= 'none';
                document.getElementById('foto1').style.display= 'none';
                document.getElementById('foto4').style.display= 'none';
                document.getElementById('foto5').style.display= 'none';
                document.getElementById('foto6').style.display= 'none';
                document.getElementById('foto7').style.display= 'none';
                document.getElementById('foto8').style.display= 'none';
                document.getElementById('foto9').style.display= 'none';
                document.getElementById('foto3').style.display= 'none';
            }
        }
       // desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
    }, 2000)
}
