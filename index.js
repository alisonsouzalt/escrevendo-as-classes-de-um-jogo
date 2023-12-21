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
    atacarTwo(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)

    }

}

let heroOne = new hero("Alvalon", "30", "Guerreiro", "Espada")
let heroTwo = new hero("Maverix", "35", "Mago", "Magia")

heroOne.atacar()
heroTwo.atacarTwo()

