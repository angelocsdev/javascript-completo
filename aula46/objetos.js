"use strict"

class Carro {
    constructor(nome, tipo) {
        this.nome = nome
        if(tipo==1) {
            this.tipo="Esportivo"
            this.velocidade=300
        } else if (tipo==2) {
            this.tipo="Utilitário"
            this.velocidade=120
        } else if (tipo==3) {
            this.tipo="Comum"
            this.velocidade=160
        } else {
            this.tipo="Militar"
            this.velocidade=220
        }
        copaPistao(){
            console.log("Nome: " + this.nome)
            console.log("Tipo: " + this.tipo)
            console.log("Velocidade Máxima: " + this.velocidade)
        }
    }
}

const p1=new Carro("Relampago Marquinhus", 1) // se o construtor não receber parâmetro, a class tbm não recebe
const p2=new Carro("Katiau", 2)
const p3 = new Carro("Francisco Virgulini", 2)


p1.copaPistao()