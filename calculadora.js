/* para esse exercício vamos utilizar alguns métodos nativos do JavaScript:
• Number() - para converter valores em números;
• Prompt() - para registrar entradas de usuários;
• Alert() - para mostrar mensagem ao usuário;
• Template Strings - para usar strings junto com expressões.*/

function calculadora() {
    const operacao = Number(prompt('Escolha Uma Operação:;\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

        //verificação do valor da operação
    if (!operacao || operacao > 6) {
        alert('Erro - Operação Inválida!')
        calculadora();
    }else {
        let n1 = Number(prompt('insira o primeiro valor: '));
        let n2 = Number(prompt('insira o segundo valor: '));
        let resultado;

        //verificação das variáveis
        if (!n1 || !n2) {
            alert('Erro - Parâmetros Inválidos!') 
            calculadora();
        }else {
            //funções das operações
            function soma() {
                resultado = n1 + n2;
                alert(`O Resultado da Soma é: ${n1} + ${n2} = ${resultado}`);
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`O Resultado da Subtração é: ${n1} - ${n2} = ${resultado}`);
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`O Resultado da Multiplicação é: ${n1} * ${n2} = ${resultado}`);
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`O Resultado da Divisão Real é: ${n1} / ${n2} = ${resultado}`);
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O Resultado da Divisão Inteira(resto da divisão) é: ${n1} % ${n2} = ${resultado}`);
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`O Resultado da Potenciação(elevado a) é: ${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            }
            function novaOperacao() {
                let opcao = prompt('Deseja Fazer Outra Operação? \n 1 - Sim\n 2 - Não');
                if (opcao == 1) {
                calculadora();
            }else if  (opcao == 2) {
                alert('Até Mais!')
            }else {
                alert('Digite uma Opção Válida!')
                novaOperacao();
            }
        }
    }
    // atribuindo valores as operações
switch (operacao) {
    case 1:
        soma();
        break;
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
        break;
    case 4:
        divisaoReal();
        break;
    case 5:
        divisaoInteira();
        break;
    case 6:
        potenciacao();
        break;
}
// OU

/*
if (operacao == 1) {
    soma();
}else if (operacao == 2) {
    subtracao();
}else if (operacao == 3) {
    multiplicacao();
}else if (operacao == 4) {
    divisaoReal();
}else if (operacao == 5) {
    divisaoInteira();
}else if (operacao == 6) {
    potenciacao();
}*/


    }
}
//chamando a função
calculadora();

