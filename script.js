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

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert(`Até para digitar um e-mail falso você falha, ${nome || 'criatura'}. Tenta usar o formato certo: lixo@provedor.com`);
    } else {
        alert(`Atestado assinado, ${nome}. Seu e-mail '${email}' foi cadastrado no nosso banco de dados inútil e será ignorado com sucesso.`);
        
        this.reset();
    }
});