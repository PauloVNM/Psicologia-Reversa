// 1. O Gerador de Desmotivação (Já estava aqui)
const frases = [
    "Além de não ser fácil, ainda é difícil!",
    "Expectativa é igual paçoca, do nada esfarela tudo.",
    "Não se desanime com a derrota de hoje, porque amanhã tem mais.",
    "De longe parece derrotado, de perto parece que está longe.",
    "O segredo do sucesso é fazer o contrário do você está fazendo.",
    "Relaxa, porque daqui para frente é só para trás.",
    "Arrisque, tente, lute, mostre para você mesmo o quanto é incapaz.",
    "Tem gente, igual a você, que é igual nuvem. A gente olha e vê um animal.",
    "O mérito da derrota é todinho seu, orgulhe-se.",
    "É só uma fase ruim, logo vai piorar.",
    "Pode sonhar! Mas saiba que os sonhos antecedem os seus fracassos.",
    "Nunca foi azar, sempre foi incompetência!",
    "Tudo passa, até as coisas ruins vão embora para coisas terríveis chegarem.",
    "Acreditar em você mesmo já é meio caminho para o fracasso.",
    "Você não pode mudar o seu passado, porém pode estragar seu futuro.",
    "Considere a procrastinação. Quem não faz nada, não erra.",
    "Nunca subestime sua incapacidade.",
    "Quando tudo estiver dando errado, se acostume.",
    "Pode ser que o seu propósito na vida seja servir de aviso para os outros.",
    "Relaxe, a vida é uma fonte inesgotável de frustrações.",
];

document.getElementById('reality-check').addEventListener('click', () => {
    const randomFrase = frases[Math.floor(Math.random() * frases.length)];
    alert(randomFrase);
});

document.getElementById('form-decepcao').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Captura o parágrafo que criamos no HTML
    const mensagemRetorno = document.getElementById('mensagem-retorno');

    // Validação manual básica de campos vazios (já que tiramos o poder do navegador)
    if (!name || !email) {
        mensagemRetorno.style.color = '#ff4d4d'; // Cor de erro
        mensagemRetorno.textContent = "Preenche a porcaria dos campos antes de enviar. Não temos bola de cristal.";
        return; // Interrompe a execução aqui
    }

    // Validação do Regex do e-mail
    if (!regexEmail.test(email)) {
        mensagemRetorno.style.color = '#ff4d4d'; // Cor de erro
        mensagemRetorno.textContent = `Até para digitar um e-mail falso você falha, ${name}. Tenta usar o formato certo: lixo@provedor.com`;
    } else {
        // Muda o texto para dar a falsa sensação de que algo útil está acontecendo
        mensagemRetorno.style.color = '#f0f0f0';
        mensagemRetorno.textContent = "Processando sua mediocridade... aguarde.";

        // Parâmetros que vão bater com as variáveis do seu template no EmailJS
        const templateParams = {
            name: name,
            email: email
        };

        // O disparo do e-mail
        emailjs.send('service_vl5qz14', 'template_2dohp4q', templateParams)
            .then(function(response) {
                mensagemRetorno.style.color = '#ff4d4d';
                mensagemRetorno.textContent = `Feito, ${name}. O questionário foi enviada com sucesso para ${email}. Vá checar sua caixa de entrada (ou o spam).`;
                document.getElementById('form-decepcao').reset();
            }, function(error) {
                mensagemRetorno.style.color = '#ff4d4d';
                mensagemRetorno.textContent = `Até para te ofender o sistema falha. Erro ao enviar o e-mail.`;
                console.log('Erro do EmailJS:', error);
            });
    }
});