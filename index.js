class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;
        if(this.tipo === "mago"){
            ataque = "usou magia";
        } else if(this.tipo === "guerreiro"){
            ataque = "usou espada";
        } else if(this.tipo === "monge"){
            ataque = "usou artes marciais";
        } else if(this.tipo === "ninja"){
            ataque = "usou shuriken";
        } 
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let hero = new heroi("Felpile", "23", "mago");

hero.atacar();