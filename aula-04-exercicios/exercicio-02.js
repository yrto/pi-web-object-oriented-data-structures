class User {
    constructor(nome, senha) {

        let nome_usuario = nome;
        let senha_usuario = senha;
        let logado = false;

        this.logar = (usuario_tentado, senha_tentada) => {
            if (usuario_tentado === nome_usuario && senha_tentada === senha_usuario) {
                logado = true;
                console.log('Logado!')
            }
            else {
                console.log('Usuário ou senha incorreto!')
            }
        }

        this.alterarSenha = (nova_senha) => {
            if (logado) {
                senha_usuario = nova_senha;
            }
            else {
                console.log('É necessário logar primeiro!')
            }
        }
    }
}

const novoUsuario = new User('Ayrton', '1234')

console.log(novoUsuario)