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

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

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
    pergunta     : "Onde está localizada a tíbia?",
    alternativaA : "Coxa",
    alternativaB : "Pelve",
    alternativaC : "Perna",
    correta      : "Perna",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "O músculo bíceps está localizado em:",
    alternativaA : "Braço",
    alternativaB : "Antebraço",
    alternativaC : "Pé",
    correta      : "Braço",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Em que parte do corpo se formam os discos de hérnia?",
    alternativaA : "Pelve",
    alternativaB : "Perna",
    alternativaC : "Coluna",
    correta      : "Coluna",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Em que parte do corpo encontramos falanges?",
    alternativaA : "Mãos",
    alternativaB : "Ambas estão corretas",
    alternativaC : "Pés",
    correta      : "Ambas estão corretas",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Onde podemos encontrar o osso etmoidal?",
    alternativaA : "Pelve",
    alternativaB : "Crânio",
    alternativaC : "Antebraço",
    correta      : "Crânio",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Como é formada a articulação do quadril?",
    alternativaA : "Coxal e fêmur",
    alternativaB : "Fêmur e tíbia",
    alternativaC : "Tíbia e coxal",
    correta      : "Coxal e fêmur",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Quantas falanges o polegar possui?",
    alternativaA : "Três",
    alternativaB : "Dois",
    alternativaC : "Cinco",
    correta      : "Dois",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "O que não é um osso uniforme?",
    alternativaA : "Frontal",
    alternativaB : "Parietal",
    alternativaC : "Temporário",
    correta      : "Frontal",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Onde está localizado o osso ísquico?",
    alternativaA : "Pelve",
    alternativaB : "Crânio",
    alternativaC : "Antebraço",
    correta      : "Pelve",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "O esqueleto humano é divido em:",
    alternativaA : "Duas partes: Axial e lateral",
    alternativaB : "Três partes: Axial, proximal e lateral",
    alternativaC : "Duas partes: Axial e apendicular",
    correta      : "Duas partes: Axial e apendicular",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

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

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

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

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
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
