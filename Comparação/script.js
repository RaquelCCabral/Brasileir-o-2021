function comparar(){

    //Armazenar os dados das caixas em variáveis

    let medida1 = document.getElementById('medida1').value;
    let medida2 = document.getElementById('medida2').value;
    let preco1 = document.getElementById('preco1').value;
    let preco2 = document.getElementById('preco2').value;
    let quantidade1 = document.getElementById('quantidade1').value;
    let quantidade2 = document.getElementById('quantidade2').value;

    let PesoLiq1 = document.getElementById('PesoLiq1').value;
    let PesoLiq2 = document.getElementById('PesoLiq2').value;
    let opcao1 = document.getElementById('opção1').value;
    let opcao2 = document.getElementById('opção2').value;

    let multiplicador;
    let valorTotal1;
    let valorTotal2;
    let valorMed1;
    let valorMed2;

    switch(PesoLiq1){ 
        //Relação condicional entre os itens selecionados na caixa de opções de medidas
        //Conversão de medidas de pesos e volumes
        case 'mg':
            if(PesoLiq2 == 'mg'){
                multiplicador = 1;
                break;
            }
            else if(PesoLiq2 == 'g') {
                multiplicador = 1000;
                break;
            }
            else if(PesoLiq2 == 'kg') {
                multiplicador = 1000000;
                break;
            }
        case 'g':
            if(PesoLiq2 == 'mg'){
                multiplicador = 0.001;
                break;
            }
            else if(PesoLiq2 == 'g') {
                multiplicador = 1;
                break;
            }
            else if(PesoLiq2 == 'kg') {
                multiplicador = 1000;
                break;
            }
        case 'kg':
            if(PesoLiq2 == 'mg'){
                multiplicador = 0.000001;
                break;
            }
            else if(PesoLiq2 == 'g') {
                multiplicador = 0.001;
                break;
            }
            else if(PesoLiq2 == 'kg') {
                multiplicador = 1;
                break;
            }
        case 'ml':
            if(PesoLiq2 == 'ml'){
                multiplicador = 1;
                break;
            }
            else if(PesoLiq2 == 'L') {
                multiplicador = 1000;
                break;
            }
        case 'L':
            if(PesoLiq2 == 'ml'){
                multiplicador = 0.001;
                break;
            }
            else if(PesoLiq2 == 'L') {
                multiplicador = 1;
                break;
            }
    }

    //Separados combos e unidades pra quando o consumidor colocar valor total do combo poder separar por unidade e calcular

    switch(opcao1){
        case 'unidade1':
            valorMed1 = preco1/medida1; //Preço de um único item do produto 1 por 1 medida. Ex.: 1mg, 1g, 1kg, 1ml, 1L
            valorTotal1 = preco1*quantidade1; //Preço total das quantidades do produto 1
            break;
        case 'combo1':
            valorMed1 = preco1/quantidade1/medida1; //Preço de um único item do produto 1 por 1 medida. Ex.: 1mg, 1g, 1kg, 1ml, 1L
            valorTotal1 = preco1; //Preço total das quantidades do produto 1
            break;
    }

    switch(opcao2){
        case 'unidade2':
            valorMed2 = preco2/medida2; //Preço de um único item do produto 2 por 1 medida. Ex.: 1mg, 1g, 1kg, 1ml, 1L
            valorTotal2 = preco2*quantidade2; //Preço total das quantidades do produto 2
            break;
        case 'combo2':
            valorMed2 = preco1/quantidade1/medida2; //Preço de um único item do produto 2 por 1 medida. Ex.: 1mg, 1g, 1kg, 1ml, 1L
            valorTotal2 = preco2; //Preço total das quantidades do produto 2
            break;
    }

    let supostoValor2 = parseFloat(valorMed1*multiplicador*medida2*quantidade2).toFixed(2);
    //O valor de uma unidade e uma quantidade de medida do primeiro produto multiplicado à variável de conversão de medidas
    //Depois multiplicado pela quantidade de medida do produto 2 e sua quantidade de unidades
    //usei parseFloat().toFixed() para não ficar um valor enorme já que o mínimo de preço que usamos é 0.01 real (1 centavo)

    if(supostoValor2 > valorTotal2){//Pegando pela id do span uso o innerHTML para retornar o resultado da função no site
        document.getElementById('resultado').innerHTML = 'O produto 2 é mais barato, pois '+ quantidade2 + ' unidade(s) de ' + medida2 + PesoLiq2 + ' do produto 1 valeria: ' + supostoValor2 + ' reais.';
    } //Para casos em que o produto 2 compensa mais que o produto 1
    else if(supostoValor2 < valorTotal2){
    document.getElementById('resultado').innerHTML = 'O produto 1 é mais barato, pois, '+ quantidade2 + ' unidade(s) de ' + medida2 + PesoLiq2 + ' do produto 1 valeria: ' + supostoValor2 + ' reais.';
    } //Para casos em que o produto 1 compensa mais que o produto 2
    else{
        document.getElementById('resultado').innerHTML = 'Ambos possuem o mesmo valor.'
    } //Para casos em que os produtos tem o mesmo valor
}