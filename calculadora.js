{
    // definindo função de pergunta para continuar o programa
    var continuar = function() { // Funcão de pergunta para continuar o programa
        var cont = Number(0);
        var continuar0 = prompt('Deseja continuar? s/n');

        if(continuar0 === 'n') { // condição de parar o programa
            alert('O processo foi encerrado');
        }else if(continuar0 === 's'){ // condição de continuar o programa 
            alert('Continuando o processo');
        }else{ // condição que repete a pergunta caso o usuário escreva errado ou algo diferente
            for(i=-1;i < cont;i++) {
                alert('Comando não reconhecido');
                alert(continuar());
            }
        }
    }
    alert(continuar());
    // definindo função de soma
    var soma = function(x, y) {
        var result_soma = (x + y);
        return result_soma;
    }
    // definindo função de subitração
    var sub = function(x, y) {
        var result_sub = (x - y);
        return result_sub;
    }
    // definindo função de multiplicação
    var mult = function(x, y) {
        var result_mult = (x * y);
        return result_mult;
    }
    // definindo função de divisão
    var div = function(x, y) {
        var result_div = (x / y);
        return result_div;
    }

    var pergunta = prompt('Qual calculo você deseja fazer? (Digite EXATAMENTE o que está entre parenteses a seguir):\nBásico(b)\nPorcentagem(p)\nMédia Aritmética(ma)\nMédia Ponderada(mp))');

    if(pergunta === 'b') {
        var x = Number(prompt('Digite o primeiro valor:'));
        var y = Number(prompt('Digite o segundo valor:'));
        var basico = prompt('Digite qual operador deseja utilizar (digite o que está em parenteses a seguir):\nSoma(+)\nSubitração(-)\nMultiplicação(*)\nDivisão(/)');
        if(basico === '+') {
            alert('A soma de '+ x + ' + ' + y + ' é igual a: ' + soma(x, y));
        }else if(basico === '-') {
            alert('A subitração de '+ x + ' - ' + y + ' é igual a: ' + sub(x, y));
        }else if(basico === '*') {
            alert('A multiplicação de '+ x + ' x ' + y + ' é igual a: ' + mult(x, y));
        }else if(basico === '/'){
            if(y === 0) {
                alert('Não é possível fazer esse calculo');
            }else{
                alert('A divisão de '+ x + ' ÷ ' + y + ' é igual a: ' + div(x, y));
            }
        }

    }else if(pergunta === 'p') {
        var x = Number(prompt('Digite a porcentagem:'));
        var y = Number(prompt('Digite o valor para a porcentagem:'));

        var multiplicado = mult(x, y);
        var result_final = div(multiplicado, 100);
        alert('A porcentagem de ' + x + ' do valor ' + y + ' é: ' + result_final);

    }else if(pergunta === 'ma') {
        var x = [];
        var quant_Num = Number(prompt('Digite a quantidade de números desejados'));

        for(i=0;i < quant_Num;i++) {
            var x = [prompt('Digite o numero:' + i)];
        }

        alert(x);
    }
}