// o this é usado para usar o mesmo nome da variável dentro da função sem precisar ddeclarar outra variável

function aluno(nome, nota) {
    this.nome = nome
    this.nota = nota

    this.dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 4000)
    }
}

const all = new aluno("Gabriel", 100)
all.dados_arrow()