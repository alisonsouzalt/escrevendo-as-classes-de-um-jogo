class hero{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)

    }

}

let ataqBasic = new hero("Alvalon", "30", "Guerreiro", "Espada")

ataqBasic.atacar()

