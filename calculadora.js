
    let inicio = ""
    let valor1
    let valor2
    let resposta 

    

    function adicao(){
        resposta =  parseInt(valor1) + parseInt(valor2)
    }

    function subtracao(){
        resposta =  parseInt(valor1) - parseInt(valor2)
    }

    function multiplicacao(){
        resposta =  parseInt(valor1) * parseInt(valor2)
    }

    function divisao(){
        resposta =  parseInt(valor1) / parseInt(valor2)
    } 


    inicio = prompt ('Olá, gostaria de fazer uma conta usando qual operador?\n Soma (+), subtração (-), multiplicação (*) ou divisão (/) ?');
       if (inicio === '+') { 
            valor1 = prompt ('Adicione o primeiro valor');
            valor2 = prompt ('Adicione o segundo');
            adicao();
            alert(`Sua resposta é ${resposta}`);
        } 
        else if (inicio === '-'){
            valor1 = prompt ('Adicione o primeiro valor')
            valor2 = prompt ('Adicione o segundo')
            subtracao();
            alert(`Sua resposta é ${resposta}`)
        }
        else if (inicio === '*'){
            valor1 = prompt ('Adicione o primeiro valor')
            valor2 = prompt ('Adicione o segundo')
            multiplicacao();
            alert(`Sua resposta é ${resposta}`)
        }
        else if (inicio === '/'){
            valor1 = prompt ('Adicione o primeiro valor')
            valor2 = prompt ('Adicione o segundo')
            divisao();
            alert(`Sua resposta é ${resposta}`)
        }
