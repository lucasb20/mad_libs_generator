const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

canvas.width = 700
canvas.height = 400

let word = ''
const words = []
const textos = []
textos.push([['O cachorro '],[' correu '],[' ao redor do '],[' parque.']])
textos.push([['O '],[' comeu um '],[''],['.']])
textos.push([['O '],[' foi a '],[' loja para comprar alguns '],['.']])
textos.push([['O '],[' saltou sobre o '],[' enquanto corria do '],['.']])
textos.push([['Eu amo comer '],[' com '],[' acampanhado de '],[' no café da manhã.']])
textos.push([['O '],[''],[' correu pelo '],['.']])
textos.push([['Ele é tão '],[' quanto um '],[' acompanhado de um '],['.']])
textos.push([['Ela '],[' graciosamente como um '],[''],['.']])
textos.push([['O '],[' estava tão '],[' que fez todos '],['.']])
textos.push([['O '],[' voou '],[' pelo '],[' brilhante.']])
const ordens = []
ordens.push([['adjetivo'],['adverbo'],['adjetivo']])
ordens.push([['substantivo'],['substantivo'],['adjetivo']])
ordens.push([['substantivo'],['adjetivo'],['substantivo']])
ordens.push([['substantivo'],['adjetivo'],['substantivo']])
ordens.push([['substantivo'],['substantivo'],['substantivo']])
ordens.push([['adjetivo'],['substantivo'],['substantivo']])
ordens.push([['adjetivo'],['substantivo'],['substantivo']])
ordens.push([['verbo'],['substantivo'],['adjetivo']])
ordens.push([['substantivo'],['adjetivo'],['verbo']])
ordens.push([['substantivo'],['adjetivo'],['substantivo']])
let selected = 0
let order = 0

function init(){
    selecionar()
    game()
    escrever("Olá, seja bem vindo ao jogo.",130,40)
}

function selecionar(){
    selected=Math.floor(Math.random()*textos.length)
}

function escrever(txt,x,y){
    ctx.font = '30px arial black'
    let lineheight = 30;
    let lines = txt.split('\n');
    for (let i = 0; i < lines.length; i++) {
    ctx.fillText(lines[i], x, y + (i * lineheight));
    }
}

document.querySelector('#but_send').addEventListener('click',send)
function send(){
    word = document.getElementsByTagName('input')[0].value
    order++
    words.push(word)
    game()
    escrever("Olá, seja bem vindo ao jogo.",130,40)
}

function game(){
    if(order != 3){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        frase = "_ ("+ordens[selected][order]+")"
        escrever(textos[selected][order]+frase,50,200)
    }
    else{
        ctx.clearRect(0,0,canvas.width,canvas.height)
        escrever(textos[selected][0]+words[0]+textos[selected][1]+words[1]+'\n'+textos[selected][2]+words[2]+textos[selected][3],20,200)
        order=0
        words.length = 0
        selecionar()
    }
}