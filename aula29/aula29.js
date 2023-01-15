function aluno(nome,nota){
    this.nome=nome
    this.nota=nota// THIS É USADO PARA CRIAR UMA VARIÁVEL COM O MESMO NOME DO PARÂMETRO


    this.dados_anonimo=function(){
        setTimeout(()=>{// arrow function contorna o erro que dá no this!!
            console.log(this.nome)
            console.log(this.nota)
        }, 2000) // -> tempo do setTimeout
    }
}
const al1= new aluno("ÂNGELO", 9.8)

al1.dados_anonimo()