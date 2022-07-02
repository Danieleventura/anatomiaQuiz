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
    pergunta     : "Durante a locomoção, o movimento é efetuado pelo esforço:",
    alternativaA : "De tração dos músculos sobre os ossos.",
    alternativaB : "Dos ossos sobre as articulações.",
    alternativaC : "De tração dos músculos.",
    correta      : "De tração dos músculos sobre os ossos.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Ao ser bombeado do átrio esquerdo para o ventrículo esquerdo, o sangue atravessa a valva:",
    alternativaA : "Atrioventricular esquerda e, em seguida, sai desse ventrículo atravessando a valva semilunar pulmonar.",
    alternativaB : "Semilunar aórtica e, em seguida, sai desse ventrículo atravessando a valva atrioventricular esquerda.",
    alternativaC : "Atrioventricular esquerda e, em seguida, sai desse ventrículo atravessando a valva semilunar aórtica.",
    correta      : "Atrioventricular esquerda e, em seguida, sai desse ventrículo atravessando a valva semilunar aórtica.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Durante a inspeção da caixa craniana, logo após o corte da calvária (“abóboda” do crânio), observa-se o(a):",
    alternativaA : "Pia-máter.",
    alternativaB : "Dura-máter.",
    alternativaC : "Líquido cefalorraquidiano.",
    correta      : "Dura-máter.",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Após a realização de uma análise necroscópica, o laudo apontou a existência de uma fratura no osso hioide. Esse osso está localizado no(a):",
    alternativaA : "Parte anterior do pescoço.",
    alternativaB : "Parte anterior do pescoço.",
    alternativaC : "Caixa torácica.",
    correta      : "Parte anterior do pescoço.",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Para exame de alcoolemia 24 horas após o óbito, pode-se utilizar o sangue coletado da veia cava superior. Essa veia transporta o sangue que:",
    alternativaA : "Chega ao ventrículo esquerdo do coração.",
    alternativaB : "Chega ao ventrículo direito do coração.",
    alternativaC : "Chega ao átrio direito do coração.",
    correta      : "Chega ao átrio direito do coração.",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "As glândulas lacrimais, salivares e gastrointestinais são estimuladas por:",
    alternativaA : "Acetilcolina",
    alternativaB : "Serotonina",
    alternativaC : "Dopamina",
    correta      : "Acetilcolina",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "São funções do parassimpático, assinale a incorreta:",
    alternativaA : "Broncodilatação",
    alternativaB : "Bradicardia",
    alternativaC : "Estimular a salivação",
    correta      : "Broncodilatação",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "São ossos da orelha média, EXCETO:",
    alternativaA : "Martelo.",
    alternativaB : "Estribo.",
    alternativaC : "Cóclea.",
    correta      : "Cóclea.",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "São órgãos do sistema linfático, EXCETO:",
    alternativaA : "Baço.",
    alternativaB : "Gânglio pré-vertebral.",
    alternativaC : "Linfonodo.",
    correta      : "Gânglio pré-vertebral.",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Com relação à necropsia, é CORRETO afirmar que",
    alternativaA : "Não tem como objetivo preservar as características físicas do cadáver.",
    alternativaB : "A reconstituição do cadáver não é uma etapa da necropsia.",
    alternativaC : "A necropsia médica tem por finalidade determinar a causa da morte.",
    correta      : "A necropsia médica tem por finalidade determinar a causa da morte.",
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
            pergunta.textContent   = questoes[proxima].pergunta
            a.textContent = questoes[proxima].alternativaA
            b.textContent = questoes[proxima].alternativaB
            c.textContent = questoes[proxima].alternativaC
            a.setAttribute('value', proxima+'A')
            b.setAttribute('value', proxima+'B')
            c.setAttribute('value', proxima+'C')
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
