let paises = [
    {nome: 'Qatar', grupo: 'Grupo A', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/qatar.png'},
    {nome: 'Equador', grupo: 'Grupo A', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/equador.png'},
    {nome: 'Senegal', grupo: 'Grupo A', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/senegal.png'},
    {nome: 'Holanda', grupo: 'Grupo A', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/holanda.png'},
    {nome: 'Inglaterra', grupo: 'Grupo B', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/inglaterra.png'},
    {nome: 'Irã', grupo: 'Grupo B', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/ira.png'},
    {nome: 'Eua', grupo: 'Grupo B', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/eua.png'},
    {nome: 'País de Gales', grupo: 'Grupo B', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/paisdegales.png'},
    {nome: 'Argentina', grupo: 'Grupo C', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/argentina.png'},
    {nome: 'Arábia Saudita', grupo: 'Grupo C', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/arabiasaudita.png'},
    {nome: 'México', grupo: 'Grupo C', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/mexico.png'},
    {nome: 'Polônia', grupo: 'Grupo C', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/polonia.png'},
    {nome: 'França', grupo: 'Grupo D', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/franca.png'},
    {nome: 'Austrália', grupo: 'Grupo D', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/australia.png'},
    {nome: 'Dinamarca', grupo: 'Grupo D', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/dinamarca.png'},
    {nome: 'Tunísia', grupo: 'Grupo D', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/tunisia.png'},
    {nome: 'Espanha', grupo: 'Grupo E', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/espanha.png'},
    {nome: 'Costa Rica', grupo: 'Grupo E', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/costarica.png'},
    {nome: 'Alemanha', grupo: 'Grupo E', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/alemanha.png'},
    {nome: 'Japão', grupo: 'Grupo E', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/japao.png'},
    {nome: 'Bélgica', grupo: 'Grupo F', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/belgica.png'},
    {nome: 'Canadá', grupo: 'Grupo F', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/canada.png'},
    {nome: 'Marrocos', grupo: 'Grupo F', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/marrocos.png'},
    {nome: 'Croácia', grupo: 'Grupo F', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/croacia.png'},
    {nome: 'Brasil', grupo: 'Grupo G', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/brasil.png'},
    {nome: 'Sérvia', grupo: 'Grupo G', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/servia.png'},
    {nome: 'Suíça', grupo: 'Grupo G', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/suica.png'},
    {nome: 'Camarões', grupo: 'Grupo G', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/camaroes.png'},
    {nome: 'Portugal', grupo: 'Grupo H', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/portugal.png'},
    {nome: 'Gana', grupo: 'Grupo H', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/gana.png'},
    {nome: 'Uruguai', grupo: 'Grupo H', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/uruguai.png'},
    {nome: 'Coréia', grupo: 'Grupo H', pontos: 0, jogos: 0, vitorias: 0, empates: 0, derrotas: 0, gp: 0, gc: 0, sg: 0, src: 'bandeiras/coreia.png'}
]; // Array de objetos com dados de cada país

function saveScore() {
    localStorage.setItem('Cat1', document.getElementById('Cat1').value);
    localStorage.setItem('Equ1', document.getElementById('Equ1').value);
    localStorage.setItem('Ing1', document.getElementById('Ing1').value);
    localStorage.setItem('Ira1', document.getElementById('Ira1').value);
    localStorage.setItem('Sen1', document.getElementById('Sen1').value);
    localStorage.setItem('Hol1', document.getElementById('Hol1').value);
    localStorage.setItem('Eua1', document.getElementById('Eua1').value);
    localStorage.setItem('Gal1', document.getElementById('Gal1').value);
    localStorage.setItem('Arg1', document.getElementById('Arg1').value);
    localStorage.setItem('Ara1', document.getElementById('Ara1').value);
    localStorage.setItem('Din1', document.getElementById('Din1').value);
    localStorage.setItem('Tun1', document.getElementById('Tun1').value);
    localStorage.setItem('Mex1', document.getElementById('Mex1').value);
    localStorage.setItem('Pol1', document.getElementById('Pol1').value);
    localStorage.setItem('Fra1', document.getElementById('Fra1').value);
    localStorage.setItem('Aus1', document.getElementById('Aus1').value);
    localStorage.setItem('Mar1', document.getElementById('Mar1').value);
    localStorage.setItem('Cro1', document.getElementById('Cro1').value);
    localStorage.setItem('Ale1', document.getElementById('Ale1').value);
    localStorage.setItem('Jap1', document.getElementById('Jap1').value);
    localStorage.setItem('Esp1', document.getElementById('Esp1').value);
    localStorage.setItem('Cos1', document.getElementById('Cos1').value);
    localStorage.setItem('Bel1', document.getElementById('Bel1').value);
    localStorage.setItem('Can1', document.getElementById('Can1').value);
    localStorage.setItem('Sui1', document.getElementById('Sui1').value);
    localStorage.setItem('Cam1', document.getElementById('Cam1').value);
    localStorage.setItem('Uru1', document.getElementById('Uru1').value);
    localStorage.setItem('Cor1', document.getElementById('Cor1').value);
    localStorage.setItem('Por1', document.getElementById('Por1').value);
    localStorage.setItem('Gan1', document.getElementById('Gan1').value);
    localStorage.setItem('Bra1', document.getElementById('Bra1').value);
    localStorage.setItem('Ser1', document.getElementById('Ser1').value);
    localStorage.setItem('Cat2', document.getElementById('Cat2').value);
    localStorage.setItem('Equ2', document.getElementById('Equ2').value);
    localStorage.setItem('Ing2', document.getElementById('Ing2').value);
    localStorage.setItem('Ira2', document.getElementById('Ira2').value);
    localStorage.setItem('Sen2', document.getElementById('Sen2').value);
    localStorage.setItem('Hol2', document.getElementById('Hol2').value);
    localStorage.setItem('Eua2', document.getElementById('Eua2').value);
    localStorage.setItem('Gal2', document.getElementById('Gal2').value);
    localStorage.setItem('Arg2', document.getElementById('Arg2').value);
    localStorage.setItem('Ara2', document.getElementById('Ara2').value);
    localStorage.setItem('Din2', document.getElementById('Din2').value);
    localStorage.setItem('Tun2', document.getElementById('Tun2').value);
    localStorage.setItem('Mex2', document.getElementById('Mex2').value);
    localStorage.setItem('Pol2', document.getElementById('Pol2').value);
    localStorage.setItem('Fra2', document.getElementById('Fra2').value);
    localStorage.setItem('Aus2', document.getElementById('Aus2').value);
    localStorage.setItem('Mar2', document.getElementById('Mar2').value);
    localStorage.setItem('Cro2', document.getElementById('Cro2').value);
    localStorage.setItem('Ale2', document.getElementById('Ale2').value);
    localStorage.setItem('Jap2', document.getElementById('Jap2').value);
    localStorage.setItem('Esp2', document.getElementById('Esp2').value);
    localStorage.setItem('Cos2', document.getElementById('Cos2').value);
    localStorage.setItem('Bel2', document.getElementById('Bel2').value);
    localStorage.setItem('Can2', document.getElementById('Can2').value);
    localStorage.setItem('Sui2', document.getElementById('Sui2').value);
    localStorage.setItem('Cam2', document.getElementById('Cam2').value);
    localStorage.setItem('Uru2', document.getElementById('Uru2').value);
    localStorage.setItem('Cor2', document.getElementById('Cor2').value);
    localStorage.setItem('Por2', document.getElementById('Por2').value);
    localStorage.setItem('Gan2', document.getElementById('Gan2').value);
    localStorage.setItem('Bra2', document.getElementById('Bra2').value);
    localStorage.setItem('Ser2', document.getElementById('Ser2').value);
    localStorage.setItem('Cat3', document.getElementById('Cat3').value);
    localStorage.setItem('Equ3', document.getElementById('Equ3').value);
    localStorage.setItem('Ing3', document.getElementById('Ing3').value);
    localStorage.setItem('Ira3', document.getElementById('Ira3').value);
    localStorage.setItem('Sen3', document.getElementById('Sen3').value);
    localStorage.setItem('Hol3', document.getElementById('Hol3').value);
    localStorage.setItem('Eua3', document.getElementById('Eua3').value);
    localStorage.setItem('Gal3', document.getElementById('Gal3').value);
    localStorage.setItem('Arg3', document.getElementById('Arg3').value);
    localStorage.setItem('Ara3', document.getElementById('Ara3').value);
    localStorage.setItem('Din3', document.getElementById('Din3').value);
    localStorage.setItem('Tun3', document.getElementById('Tun3').value);
    localStorage.setItem('Mex3', document.getElementById('Mex3').value);
    localStorage.setItem('Pol3', document.getElementById('Pol3').value);
    localStorage.setItem('Fra3', document.getElementById('Fra3').value);
    localStorage.setItem('Aus3', document.getElementById('Aus3').value);
    localStorage.setItem('Mar3', document.getElementById('Mar3').value);
    localStorage.setItem('Cro3', document.getElementById('Cro3').value);
    localStorage.setItem('Ale3', document.getElementById('Ale3').value);
    localStorage.setItem('Jap3', document.getElementById('Jap3').value);
    localStorage.setItem('Esp3', document.getElementById('Esp3').value);
    localStorage.setItem('Cos3', document.getElementById('Cos3').value);
    localStorage.setItem('Bel3', document.getElementById('Bel3').value);
    localStorage.setItem('Can3', document.getElementById('Can3').value);
    localStorage.setItem('Sui3', document.getElementById('Sui3').value);
    localStorage.setItem('Cam3', document.getElementById('Cam3').value);
    localStorage.setItem('Uru3', document.getElementById('Uru3').value);
    localStorage.setItem('Cor3', document.getElementById('Cor3').value);
    localStorage.setItem('Por3', document.getElementById('Por3').value);
    localStorage.setItem('Gan3', document.getElementById('Gan3').value);
    localStorage.setItem('Bra3', document.getElementById('Bra3').value);
    localStorage.setItem('Ser3', document.getElementById('Ser3').value);
    dataGet();
    location.reload();
}; //Função para salvar na página os dados para toda vez que acessar novamente o usuário só precise atualizar

function dataGet() {
    document.getElementById('Cat1').value = localStorage.getItem('Cat1');
    document.getElementById('Equ1').value = localStorage.getItem('Equ1');
    document.getElementById('Ing1').value = localStorage.getItem('Ing1');
    document.getElementById('Ira1').value = localStorage.getItem('Ira1');
    document.getElementById('Sen1').value = localStorage.getItem('Sen1');
    document.getElementById('Hol1').value = localStorage.getItem('Hol1');
    document.getElementById('Eua1').value = localStorage.getItem('Eua1');
    document.getElementById('Gal1').value = localStorage.getItem('Gal1');
    document.getElementById('Arg1').value = localStorage.getItem('Arg1');
    document.getElementById('Ara1').value = localStorage.getItem('Ara1');
    document.getElementById('Din1').value = localStorage.getItem('Din1');
    document.getElementById('Tun1').value = localStorage.getItem('Tun1');
    document.getElementById('Mex1').value = localStorage.getItem('Mex1');
    document.getElementById('Pol1').value = localStorage.getItem('Pol1');
    document.getElementById('Fra1').value = localStorage.getItem('Fra1');
    document.getElementById('Aus1').value = localStorage.getItem('Aus1');
    document.getElementById('Mar1').value = localStorage.getItem('Mar1');
    document.getElementById('Cro1').value = localStorage.getItem('Cro1');
    document.getElementById('Ale1').value = localStorage.getItem('Ale1');
    document.getElementById('Jap1').value = localStorage.getItem('Jap1');
    document.getElementById('Esp1').value = localStorage.getItem('Esp1');
    document.getElementById('Cos1').value = localStorage.getItem('Cos1');
    document.getElementById('Bel1').value = localStorage.getItem('Bel1');
    document.getElementById('Can1').value = localStorage.getItem('Can1');
    document.getElementById('Sui1').value = localStorage.getItem('Sui1');
    document.getElementById('Cam1').value = localStorage.getItem('Cam1');
    document.getElementById('Uru1').value = localStorage.getItem('Uru1');
    document.getElementById('Cor1').value = localStorage.getItem('Cor1');
    document.getElementById('Por1').value = localStorage.getItem('Por1');
    document.getElementById('Gan1').value = localStorage.getItem('Gan1');
    document.getElementById('Bra1').value = localStorage.getItem('Bra1');
    document.getElementById('Ser1').value = localStorage.getItem('Ser1');
    document.getElementById('Cat2').value = localStorage.getItem('Cat2');
    document.getElementById('Equ2').value = localStorage.getItem('Equ2');
    document.getElementById('Ing2').value = localStorage.getItem('Ing2');
    document.getElementById('Ira2').value = localStorage.getItem('Ira2');
    document.getElementById('Sen2').value = localStorage.getItem('Sen2');
    document.getElementById('Hol2').value = localStorage.getItem('Hol2');
    document.getElementById('Eua2').value = localStorage.getItem('Eua2');
    document.getElementById('Gal2').value = localStorage.getItem('Gal2');
    document.getElementById('Arg2').value = localStorage.getItem('Arg2');
    document.getElementById('Ara2').value = localStorage.getItem('Ara2');
    document.getElementById('Din2').value = localStorage.getItem('Din2');
    document.getElementById('Tun2').value = localStorage.getItem('Tun2');
    document.getElementById('Mex2').value = localStorage.getItem('Mex2');
    document.getElementById('Pol2').value = localStorage.getItem('Pol2');
    document.getElementById('Fra2').value = localStorage.getItem('Fra2');
    document.getElementById('Aus2').value = localStorage.getItem('Aus2');
    document.getElementById('Mar2').value = localStorage.getItem('Mar2');
    document.getElementById('Cro2').value = localStorage.getItem('Cro2');
    document.getElementById('Ale2').value = localStorage.getItem('Ale2');
    document.getElementById('Jap2').value = localStorage.getItem('Jap2');
    document.getElementById('Esp2').value = localStorage.getItem('Esp2');
    document.getElementById('Cos2').value = localStorage.getItem('Cos2');
    document.getElementById('Bel2').value = localStorage.getItem('Bel2');
    document.getElementById('Can2').value = localStorage.getItem('Can2');
    document.getElementById('Sui2').value = localStorage.getItem('Sui2');
    document.getElementById('Cam2').value = localStorage.getItem('Cam2');
    document.getElementById('Uru2').value = localStorage.getItem('Uru2');
    document.getElementById('Cor2').value = localStorage.getItem('Cor2');
    document.getElementById('Por2').value = localStorage.getItem('Por2');
    document.getElementById('Gan2').value = localStorage.getItem('Gan2');
    document.getElementById('Bra2').value = localStorage.getItem('Bra2');
    document.getElementById('Ser2').value = localStorage.getItem('Ser2');
    document.getElementById('Cat3').value = localStorage.getItem('Cat3');
    document.getElementById('Equ3').value = localStorage.getItem('Equ3');
    document.getElementById('Ing3').value = localStorage.getItem('Ing3');
    document.getElementById('Ira3').value = localStorage.getItem('Ira3');
    document.getElementById('Sen3').value = localStorage.getItem('Sen3');
    document.getElementById('Hol3').value = localStorage.getItem('Hol3');
    document.getElementById('Eua3').value = localStorage.getItem('Eua3');
    document.getElementById('Gal3').value = localStorage.getItem('Gal3');
    document.getElementById('Arg3').value = localStorage.getItem('Arg3');
    document.getElementById('Ara3').value = localStorage.getItem('Ara3');
    document.getElementById('Din3').value = localStorage.getItem('Din3');
    document.getElementById('Tun3').value = localStorage.getItem('Tun3');
    document.getElementById('Mex3').value = localStorage.getItem('Mex3');
    document.getElementById('Pol3').value = localStorage.getItem('Pol3');
    document.getElementById('Fra3').value = localStorage.getItem('Fra3');
    document.getElementById('Aus3').value = localStorage.getItem('Aus3');
    document.getElementById('Mar3').value = localStorage.getItem('Mar3');
    document.getElementById('Cro3').value = localStorage.getItem('Cro3');
    document.getElementById('Ale3').value = localStorage.getItem('Ale3');
    document.getElementById('Jap3').value = localStorage.getItem('Jap3');
    document.getElementById('Esp3').value = localStorage.getItem('Esp3');
    document.getElementById('Cos3').value = localStorage.getItem('Cos3');
    document.getElementById('Bel3').value = localStorage.getItem('Bel3');
    document.getElementById('Can3').value = localStorage.getItem('Can3');
    document.getElementById('Sui3').value = localStorage.getItem('Sui3');
    document.getElementById('Cam3').value = localStorage.getItem('Cam3');
    document.getElementById('Uru3').value = localStorage.getItem('Uru3');
    document.getElementById('Cor3').value = localStorage.getItem('Cor3');
    document.getElementById('Por3').value = localStorage.getItem('Por3');
    document.getElementById('Gan3').value = localStorage.getItem('Gan3');
    document.getElementById('Bra3').value = localStorage.getItem('Bra3');
    document.getElementById('Ser3').value = localStorage.getItem('Ser3');
    document.getElementById('golsA1').value = localStorage.getItem('golsA1');
    document.getElementById('golsA2').value = localStorage.getItem('golsA2');
    document.getElementById('golsB1').value = localStorage.getItem('golsB1');
    document.getElementById('golsB2').value = localStorage.getItem('golsB2');
    document.getElementById('golsC1').value = localStorage.getItem('golsC1');
    document.getElementById('golsC2').value = localStorage.getItem('golsC2');
    document.getElementById('golsD1').value = localStorage.getItem('golsD1');
    document.getElementById('golsD2').value = localStorage.getItem('golsD2');
    document.getElementById('golsE1').value = localStorage.getItem('golsE1');
    document.getElementById('golsE2').value = localStorage.getItem('golsE2');
    document.getElementById('golsF1').value = localStorage.getItem('golsF1');
    document.getElementById('golsF2').value = localStorage.getItem('golsF2');
    document.getElementById('golsG1').value = localStorage.getItem('golsG1');
    document.getElementById('golsG2').value = localStorage.getItem('golsG2');
    document.getElementById('golsH1').value = localStorage.getItem('golsH1');
    document.getElementById('golsH2').value = localStorage.getItem('golsH2');
    document.getElementById('golsO1').value = localStorage.getItem('golsO1');
    document.getElementById('golsO2').value = localStorage.getItem('golsO2');
    document.getElementById('golsO3').value = localStorage.getItem('golsO3');
    document.getElementById('golsO4').value = localStorage.getItem('golsO4');
    document.getElementById('golsO5').value = localStorage.getItem('golsO5');
    document.getElementById('golsO6').value = localStorage.getItem('golsO6');
    document.getElementById('golsO7').value = localStorage.getItem('golsO7');
    document.getElementById('golsO8').value = localStorage.getItem('golsO8');
    document.getElementById('golsQ1').value = localStorage.getItem('golsQ1');
    document.getElementById('golsQ2').value = localStorage.getItem('golsQ2');
    document.getElementById('golsQ3').value = localStorage.getItem('golsQ3');
    document.getElementById('golsQ4').value = localStorage.getItem('golsQ4');
    document.getElementById('golsS1').value = localStorage.getItem('golsS1');
    document.getElementById('golsS2').value = localStorage.getItem('golsS2');
    document.getElementById('penaltisA1').value = localStorage.getItem('penaltisA1');
    document.getElementById('penaltisA2').value = localStorage.getItem('penaltisA2');
    document.getElementById('penaltisB1').value = localStorage.getItem('penaltisB1');
    document.getElementById('penaltisB2').value = localStorage.getItem('penaltisB2');
    document.getElementById('penaltisC1').value = localStorage.getItem('penaltisC1');
    document.getElementById('penaltisC2').value = localStorage.getItem('penaltisC2');
    document.getElementById('penaltisD1').value = localStorage.getItem('penaltisD1');
    document.getElementById('penaltisD2').value = localStorage.getItem('penaltisD2');
    document.getElementById('penaltisE1').value = localStorage.getItem('penaltisE1');
    document.getElementById('penaltisE2').value = localStorage.getItem('penaltisE2');
    document.getElementById('penaltisF1').value = localStorage.getItem('penaltisF1');
    document.getElementById('penaltisF2').value = localStorage.getItem('penaltisF2');
    document.getElementById('penaltisG1').value = localStorage.getItem('penaltisG1');
    document.getElementById('penaltisG2').value = localStorage.getItem('penaltisG2');
    document.getElementById('penaltisH1').value = localStorage.getItem('penaltisH1');
    document.getElementById('penaltisH2').value = localStorage.getItem('penaltisH2');
    document.getElementById('penaltisO1').value = localStorage.getItem('penaltisO1');
    document.getElementById('penaltisO2').value = localStorage.getItem('penaltisO2');
    document.getElementById('penaltisO3').value = localStorage.getItem('penaltisO3');
    document.getElementById('penaltisO4').value = localStorage.getItem('penaltisO4');
    document.getElementById('penaltisO5').value = localStorage.getItem('penaltisO5');
    document.getElementById('penaltisO6').value = localStorage.getItem('penaltisO6');
    document.getElementById('penaltisO7').value = localStorage.getItem('penaltisO7');
    document.getElementById('penaltisO8').value = localStorage.getItem('penaltisO8');
    document.getElementById('penaltisQ1').value = localStorage.getItem('penaltisQ1');
    document.getElementById('penaltisQ2').value = localStorage.getItem('penaltisQ2');
    document.getElementById('penaltisQ3').value = localStorage.getItem('penaltisQ3');
    document.getElementById('penaltisQ4').value = localStorage.getItem('penaltisQ4');
    document.getElementById('penaltisS1').value = localStorage.getItem('penaltisS1');
    document.getElementById('penaltisS2').value = localStorage.getItem('penaltisS2');
    document.getElementById('A1').innerHTML = localStorage.getItem('A1');
    document.getElementById('A2').innerHTML = localStorage.getItem('A2');
    document.getElementById('B1').innerHTML = localStorage.getItem('B1');
    document.getElementById('B2').innerHTML = localStorage.getItem('B2');
    document.getElementById('C1').innerHTML = localStorage.getItem('C1');
    document.getElementById('C2').innerHTML = localStorage.getItem('C2');
    document.getElementById('D1').innerHTML = localStorage.getItem('D1');
    document.getElementById('D2').innerHTML = localStorage.getItem('D2');
    document.getElementById('E1').innerHTML = localStorage.getItem('E1');
    document.getElementById('E2').innerHTML = localStorage.getItem('E2');
    document.getElementById('F1').innerHTML = localStorage.getItem('F1');
    document.getElementById('F2').innerHTML = localStorage.getItem('F2');
    document.getElementById('G1').innerHTML = localStorage.getItem('G1');
    document.getElementById('G2').innerHTML = localStorage.getItem('G2');
    document.getElementById('H1').innerHTML = localStorage.getItem('H1');
    document.getElementById('H2').innerHTML = localStorage.getItem('H2');
    document.getElementById('bandeiraA1').src =localStorage.getItem('bandeiraA1');
    document.getElementById('bandeiraA2').src =localStorage.getItem('bandeiraA2');
    document.getElementById('bandeiraB1').src =localStorage.getItem('bandeiraB1');
    document.getElementById('bandeiraB2').src =localStorage.getItem('bandeiraB2');
    document.getElementById('bandeiraC1').src =localStorage.getItem('bandeiraC1');
    document.getElementById('bandeiraC2').src =localStorage.getItem('bandeiraC2');
    document.getElementById('bandeiraD1').src =localStorage.getItem('bandeiraD1');
    document.getElementById('bandeiraD2').src =localStorage.getItem('bandeiraD2');
    document.getElementById('bandeiraE1').src =localStorage.getItem('bandeiraE1');
    document.getElementById('bandeiraE2').src =localStorage.getItem('bandeiraE2');
    document.getElementById('bandeiraF1').src =localStorage.getItem('bandeiraF1');
    document.getElementById('bandeiraF2').src =localStorage.getItem('bandeiraF2');
    document.getElementById('bandeiraG1').src =localStorage.getItem('bandeiraG1');
    document.getElementById('bandeiraG2').src =localStorage.getItem('bandeiraG2');
    document.getElementById('bandeiraH1').src =localStorage.getItem('bandeiraH1');
    document.getElementById('bandeiraH2').src =localStorage.getItem('bandeiraH2');
    document.getElementById('O1').innerHTML = localStorage.getItem('O1');
    document.getElementById('O2').innerHTML = localStorage.getItem('O2');
    document.getElementById('O3').innerHTML = localStorage.getItem('O3');
    document.getElementById('O4').innerHTML = localStorage.getItem('O4');
    document.getElementById('O5').innerHTML = localStorage.getItem('O5');
    document.getElementById('O6').innerHTML = localStorage.getItem('O6');
    document.getElementById('O7').innerHTML = localStorage.getItem('O7');
    document.getElementById('O8').innerHTML = localStorage.getItem('O8');
    document.getElementById('bandeiraO1').src =localStorage.getItem('bandeiraO1');
    document.getElementById('bandeiraO2').src =localStorage.getItem('bandeiraO2');
    document.getElementById('bandeiraO3').src =localStorage.getItem('bandeiraO3');
    document.getElementById('bandeiraO4').src =localStorage.getItem('bandeiraO4');
    document.getElementById('bandeiraO5').src =localStorage.getItem('bandeiraO5');
    document.getElementById('bandeiraO6').src =localStorage.getItem('bandeiraO6');
    document.getElementById('bandeiraO7').src =localStorage.getItem('bandeiraO7');
    document.getElementById('bandeiraO8').src =localStorage.getItem('bandeiraO8');
    document.getElementById('Q1').innerHTML = localStorage.getItem('Q1');
    document.getElementById('Q2').innerHTML = localStorage.getItem('Q2');
    document.getElementById('Q3').innerHTML = localStorage.getItem('Q3');
    document.getElementById('Q4').innerHTML = localStorage.getItem('Q4');
    document.getElementById('bandeiraQ1').src =localStorage.getItem('bandeiraQ1');
    document.getElementById('bandeiraQ2').src =localStorage.getItem('bandeiraQ2');
    document.getElementById('bandeiraQ3').src =localStorage.getItem('bandeiraQ3');
    document.getElementById('bandeiraQ4').src =localStorage.getItem('bandeiraQ4');
    document.getElementById('S1').innerHTML = localStorage.getItem('S1');
    document.getElementById('S2').innerHTML = localStorage.getItem('S2');
    document.getElementById('bandeiraS1').src =localStorage.getItem('bandeiraS1');
    document.getElementById('bandeiraS2').src =localStorage.getItem('bandeiraS2');
    document.getElementById('T1').innerHTML = localStorage.getItem('T1');
    document.getElementById('T2').innerHTML = localStorage.getItem('T2');
    document.getElementById('bandeiraT1').src =localStorage.getItem('bandeiraT1');
    document.getElementById('bandeiraT2').src =localStorage.getItem('bandeiraT2');
    document.getElementById('Campeao').innerHTML = localStorage.getItem('Campeao');
    document.getElementById('bandeiraCampeao1').src =localStorage.getItem('bandeiraCampeao1');
    document.getElementById('bandeiraCampeao2').src =localStorage.getItem('bandeiraCampeao2');
}; //Função para que o usuário possa visualizar os dados salvos anteriormente

function clearScore() {
    localStorage.removeItem('Cat1');
    localStorage.removeItem('Equ1');
    localStorage.removeItem('Ing1');
    localStorage.removeItem('Ira1');
    localStorage.removeItem('Sen1');
    localStorage.removeItem('Hol1');
    localStorage.removeItem('Eua1');
    localStorage.removeItem('Gal1');
    localStorage.removeItem('Arg1');
    localStorage.removeItem('Ara1');
    localStorage.removeItem('Din1');
    localStorage.removeItem('Tun1');
    localStorage.removeItem('Mex1');
    localStorage.removeItem('Pol1');
    localStorage.removeItem('Fra1');
    localStorage.removeItem('Aus1');
    localStorage.removeItem('Mar1');
    localStorage.removeItem('Cro1');
    localStorage.removeItem('Ale1');
    localStorage.removeItem('Jap1');
    localStorage.removeItem('Esp1');
    localStorage.removeItem('Cos1');
    localStorage.removeItem('Bel1');
    localStorage.removeItem('Can1');
    localStorage.removeItem('Sui1');
    localStorage.removeItem('Cam1');
    localStorage.removeItem('Uru1');
    localStorage.removeItem('Cor1');
    localStorage.removeItem('Por1');
    localStorage.removeItem('Gan1');
    localStorage.removeItem('Bra1');
    localStorage.removeItem('Ser1');
    localStorage.removeItem('Cat2');
    localStorage.removeItem('Equ2');
    localStorage.removeItem('Ing2');
    localStorage.removeItem('Ira2');
    localStorage.removeItem('Sen2');
    localStorage.removeItem('Hol2');
    localStorage.removeItem('Eua2');
    localStorage.removeItem('Gal2');
    localStorage.removeItem('Arg2');
    localStorage.removeItem('Ara2');
    localStorage.removeItem('Din2');
    localStorage.removeItem('Tun2');
    localStorage.removeItem('Mex2');
    localStorage.removeItem('Pol2');
    localStorage.removeItem('Fra2');
    localStorage.removeItem('Aus2');
    localStorage.removeItem('Mar2');
    localStorage.removeItem('Cro2');
    localStorage.removeItem('Ale2');
    localStorage.removeItem('Jap2');
    localStorage.removeItem('Esp2');
    localStorage.removeItem('Cos2');
    localStorage.removeItem('Bel2');
    localStorage.removeItem('Can2');
    localStorage.removeItem('Sui2');
    localStorage.removeItem('Cam2');
    localStorage.removeItem('Uru2');
    localStorage.removeItem('Cor2');
    localStorage.removeItem('Por2');
    localStorage.removeItem('Gan2');
    localStorage.removeItem('Bra2');
    localStorage.removeItem('Ser2');
    localStorage.removeItem('Cat3');
    localStorage.removeItem('Equ3');
    localStorage.removeItem('Ing3');
    localStorage.removeItem('Ira3');
    localStorage.removeItem('Sen3');
    localStorage.removeItem('Hol3');
    localStorage.removeItem('Eua3');
    localStorage.removeItem('Gal3');
    localStorage.removeItem('Arg3');
    localStorage.removeItem('Ara3');
    localStorage.removeItem('Din3');
    localStorage.removeItem('Tun3');
    localStorage.removeItem('Mex3');
    localStorage.removeItem('Pol3');
    localStorage.removeItem('Fra3');
    localStorage.removeItem('Aus3');
    localStorage.removeItem('Mar3');
    localStorage.removeItem('Cro3');
    localStorage.removeItem('Ale3');
    localStorage.removeItem('Jap3');
    localStorage.removeItem('Esp3');
    localStorage.removeItem('Cos3');
    localStorage.removeItem('Bel3');
    localStorage.removeItem('Can3');
    localStorage.removeItem('Sui3');
    localStorage.removeItem('Cam3');
    localStorage.removeItem('Uru3');
    localStorage.removeItem('Cor3');
    localStorage.removeItem('Por3');
    localStorage.removeItem('Gan3');
    localStorage.removeItem('Bra3');
    localStorage.removeItem('Ser3');
    localStorage.removeItem('golsA1');
    localStorage.removeItem('golsA2');
    localStorage.removeItem('golsB1');
    localStorage.removeItem('golsB2');
    localStorage.removeItem('golsC1');
    localStorage.removeItem('golsC2');
    localStorage.removeItem('golsD1');
    localStorage.removeItem('golsD2');
    localStorage.removeItem('golsE1');
    localStorage.removeItem('golsE2');
    localStorage.removeItem('golsF1');
    localStorage.removeItem('golsF2');
    localStorage.removeItem('golsG1');
    localStorage.removeItem('golsG2');
    localStorage.removeItem('golsH1');
    localStorage.removeItem('golsH2');
    localStorage.removeItem('golsO1');
    localStorage.removeItem('golsO2');
    localStorage.removeItem('golsO3');
    localStorage.removeItem('golsO4');
    localStorage.removeItem('golsO5');
    localStorage.removeItem('golsO6');
    localStorage.removeItem('golsO7');
    localStorage.removeItem('golsO8');
    localStorage.removeItem('golsQ1');
    localStorage.removeItem('golsQ2');
    localStorage.removeItem('golsQ3');
    localStorage.removeItem('golsQ4');
    localStorage.removeItem('golsS1');
    localStorage.removeItem('golsS2');
    localStorage.removeItem('penaltisA1');
    localStorage.removeItem('penaltisA2');
    localStorage.removeItem('penaltisB1');
    localStorage.removeItem('penaltisB2');
    localStorage.removeItem('penaltisC1');
    localStorage.removeItem('penaltisC2');
    localStorage.removeItem('penaltisD1');
    localStorage.removeItem('penaltisD2');
    localStorage.removeItem('penaltisE1');
    localStorage.removeItem('penaltisE2');
    localStorage.removeItem('penaltisF1');
    localStorage.removeItem('penaltisF2');
    localStorage.removeItem('penaltisG1');
    localStorage.removeItem('penaltisG2');
    localStorage.removeItem('penaltisH1');
    localStorage.removeItem('penaltisH2');
    localStorage.removeItem('penaltisO1');
    localStorage.removeItem('penaltisO2');
    localStorage.removeItem('penaltisO3');
    localStorage.removeItem('penaltisO4');
    localStorage.removeItem('penaltisO5');
    localStorage.removeItem('penaltisO6');
    localStorage.removeItem('penaltisO7');
    localStorage.removeItem('penaltisO8');
    localStorage.removeItem('penaltisQ1');
    localStorage.removeItem('penaltisQ2');
    localStorage.removeItem('penaltisQ3');
    localStorage.removeItem('penaltisQ4');
    localStorage.removeItem('penaltisS1');
    localStorage.removeItem('penaltisS2');
    localStorage.removeItem('O1');
    localStorage.removeItem('O2');
    localStorage.removeItem('O3');
    localStorage.removeItem('O4');
    localStorage.removeItem('O5');
    localStorage.removeItem('O6');
    localStorage.removeItem('O7');
    localStorage.removeItem('O8');
    localStorage.removeItem('Q1');
    localStorage.removeItem('Q2');
    localStorage.removeItem('Q3');
    localStorage.removeItem('Q4');
    localStorage.removeItem('S1');
    localStorage.removeItem('S2');
    localStorage.removeItem('bandeiraO1');
    localStorage.removeItem('bandeiraO2');
    localStorage.removeItem('bandeiraO3');
    localStorage.removeItem('bandeiraO4');
    localStorage.removeItem('bandeiraO5');
    localStorage.removeItem('bandeiraO6');
    localStorage.removeItem('bandeiraO7');
    localStorage.removeItem('bandeiraO8');
    localStorage.removeItem('bandeiraQ1');
    localStorage.removeItem('bandeiraQ2');
    localStorage.removeItem('bandeiraQ3');
    localStorage.removeItem('bandeiraQ4');
    localStorage.removeItem('bandeiraS1');
    localStorage.removeItem('bandeiraS2');
    localStorage.removeItem('T1');
    localStorage.removeItem('T2');
    localStorage.removeItem('bandeiraT1');
    localStorage.removeItem('bandeiraT2');
    localStorage.removeItem('Campeao');
    localStorage.removeItem('bandeiraCampeao1');
    localStorage.removeItem('bandeiraCampeao2');
    location.reload();
}; //Função para limpar/zerar toda a página

let jogos = [
    {selecao1: 'Qatar', selecao2: 'Equador', gols1: parseInt(localStorage.getItem('Cat1')), gols2: parseInt(localStorage.getItem('Equ1'))},
    {selecao1: 'Inglaterra', selecao2: 'Irã', gols1: parseInt(localStorage.getItem('Ing1')), gols2: parseInt(localStorage.getItem('Ira1'))},
    {selecao1: 'Senegal', selecao2: 'Holanda', gols1: parseInt(localStorage.getItem('Sen1')), gols2: parseInt(localStorage.getItem('Hol1'))},
    {selecao1: 'Eua', selecao2: 'País de Gales', gols1: parseInt(localStorage.getItem('Eua1')), gols2: parseInt(localStorage.getItem('Gal1'))},
    {selecao1: 'Argentina', selecao2: 'Arábia Saudita', gols1: parseInt(localStorage.getItem('Arg1')), gols2: parseInt(localStorage.getItem('Ara1'))},
    {selecao1: 'Dinamarca', selecao2: 'Tunísia', gols1: parseInt(localStorage.getItem('Din1')), gols2: parseInt(localStorage.getItem('Tun1'))},
    {selecao1: 'México', selecao2: 'Polônia', gols1: parseInt(localStorage.getItem('Mex1')), gols2: parseInt(localStorage.getItem('Pol1'))},
    {selecao1: 'França', selecao2: 'Austrália', gols1: parseInt(localStorage.getItem('Fra1')), gols2: parseInt(localStorage.getItem('Aus1'))},
    {selecao1: 'Marrocos', selecao2: 'Croácia', gols1: parseInt(localStorage.getItem('Mar1')), gols2: parseInt(localStorage.getItem('Cro1'))},
    {selecao1: 'Alemanha', selecao2: 'Japão', gols1: parseInt(localStorage.getItem('Ale1')), gols2: parseInt(localStorage.getItem('Jap1'))},
    {selecao1: 'Espanha', selecao2: 'Costa Rica', gols1: parseInt(localStorage.getItem('Esp1')), gols2: parseInt(localStorage.getItem('Cos1'))},
    {selecao1: 'Bélgica', selecao2: 'Canadá', gols1: parseInt(localStorage.getItem('Bel1')), gols2: parseInt(localStorage.getItem('Can1'))},
    {selecao1: 'Suíça', selecao2: 'Camarões', gols1: parseInt(localStorage.getItem('Sui1')), gols2: parseInt(localStorage.getItem('Can1'))},
    {selecao1: 'Uruguai', selecao2: 'Coréia', gols1: parseInt(localStorage.getItem('Uru1')), gols2: parseInt(localStorage.getItem('Cor1'))},
    {selecao1: 'Portugal', selecao2: 'Gana', gols1: parseInt(localStorage.getItem('Por1')), gols2: parseInt(localStorage.getItem('Gan1'))},
    {selecao1: 'Brasil', selecao2: 'Sérvia', gols1: parseInt(localStorage.getItem('Bra1')), gols2: parseInt(localStorage.getItem('Ser1'))},
    {selecao1: 'País de Gales', selecao2: 'Irã', gols1: parseInt(localStorage.getItem('Gal2')), gols2: parseInt(localStorage.getItem('Ira2'))},
    {selecao1: 'Qatar', selecao2: 'Senegal', gols1: parseInt(localStorage.getItem('Cat2')), gols2: parseInt(localStorage.getItem('Sen2'))},
    {selecao1: 'Holanda', selecao2: 'Equador', gols1: parseInt(localStorage.getItem('Hol2')), gols2: parseInt(localStorage.getItem('Equ2'))},
    {selecao1: 'Inglaterra', selecao2: 'Eua', gols1: parseInt(localStorage.getItem('Ing2')), gols2: parseInt(localStorage.getItem('Eua2'))},
    {selecao1: 'Tunísia', selecao2: 'Austrália', gols1: parseInt(localStorage.getItem('Tun2')), gols2: parseInt(localStorage.getItem('Aus2'))},
    {selecao1: 'Polônia', selecao2: 'Arábia Saudita', gols1: parseInt(localStorage.getItem('Pol2')), gols2: parseInt(localStorage.getItem('Ara2'))},
    {selecao1: 'França', selecao2: 'Dinamarca', gols1: parseInt(localStorage.getItem('Fra2')), gols2: parseInt(localStorage.getItem('Din2'))},
    {selecao1: 'Argentina', selecao2: 'México', gols1: parseInt(localStorage.getItem('Arg2')), gols2: parseInt(localStorage.getItem('Mex2'))},
    {selecao1: 'Japão', selecao2: 'Costa Rica', gols1: parseInt(localStorage.getItem('Jap2')), gols2: parseInt(localStorage.getItem('Cos2'))},
    {selecao1: 'Bélgica', selecao2: 'Marrocos', gols1: parseInt(localStorage.getItem('Bel2')), gols2: parseInt(localStorage.getItem('Mar2'))},
    {selecao1: 'Croácia', selecao2: 'Canadá', gols1: parseInt(localStorage.getItem('Cro2')), gols2: parseInt(localStorage.getItem('Can2'))},
    {selecao1: 'Espanha', selecao2: 'Alemanha', gols1: parseInt(localStorage.getItem('Esp2')), gols2: parseInt(localStorage.getItem('Ale2'))},
    {selecao1: 'Camarões', selecao2: 'Sérvia', gols1: parseInt(localStorage.getItem('Cam2')), gols2: parseInt(localStorage.getItem('Ser2'))},
    {selecao1: 'Coréia', selecao2: 'Gana', gols1: parseInt(localStorage.getItem('Cor2')), gols2: parseInt(localStorage.getItem('Gan2'))},
    {selecao1: 'Brasil', selecao2: 'Suíça', gols1: parseInt(localStorage.getItem('Bra2')), gols2: parseInt(localStorage.getItem('Sui2'))},
    {selecao1: 'Portugal', selecao2: 'Uruguai', gols1: parseInt(localStorage.getItem('Por2')), gols2: parseInt(localStorage.getItem('Uru2'))},
    {selecao1: 'Equador', selecao2: 'Senegal', gols1: parseInt(localStorage.getItem('Equ3')), gols2: parseInt(localStorage.getItem('Sen3'))},
    {selecao1: 'Holanda', selecao2: 'Qatar', gols1: parseInt(localStorage.getItem('Hol3')), gols2: parseInt(localStorage.getItem('Cat3'))},
    {selecao1: 'País de Gales', selecao2: 'Inglaterra', gols1: parseInt(localStorage.getItem('Gal3')), gols2: parseInt(localStorage.getItem('Ing3'))},
    {selecao1: 'Irã', selecao2: 'Eua', gols1: parseInt(localStorage.getItem('Ira3')), gols2: parseInt(localStorage.getItem('Eua3'))},
    {selecao1: 'Austrália', selecao2: 'Dinamarca', gols1: parseInt(localStorage.getItem('Aus3')), gols2: parseInt(localStorage.getItem('Din3'))},
    {selecao1: 'Tunísia', selecao2: 'França', gols1: parseInt(localStorage.getItem('Tun3')), gols2: parseInt(localStorage.getItem('Fra3'))},
    {selecao1: 'Arábia Saudita', selecao2: 'México', gols1: parseInt(localStorage.getItem('Ara3')), gols2: parseInt(localStorage.getItem('Mex3'))},
    {selecao1: 'Polônia', selecao2: 'Argentina', gols1: parseInt(localStorage.getItem('Pol3')), gols2: parseInt(localStorage.getItem('Arg3'))},
    {selecao1: 'Canadá', selecao2: 'Marrocos', gols1: parseInt(localStorage.getItem('Can3')), gols2: parseInt(localStorage.getItem('Mar3'))},
    {selecao1: 'Croácia', selecao2: 'Bélgica', gols1: parseInt(localStorage.getItem('Cro3')), gols2: parseInt(localStorage.getItem('Bel3'))},
    {selecao1: 'Costa Rica', selecao2: 'Alemanha', gols1: parseInt(localStorage.getItem('Cos3')), gols2: parseInt(localStorage.getItem('Ale3'))},
    {selecao1: 'Japão', selecao2: 'Espanha', gols1: parseInt(localStorage.getItem('Jap3')), gols2: parseInt(localStorage.getItem('Esp3'))},
    {selecao1: 'Coréia', selecao2: 'Portugal', gols1: parseInt(localStorage.getItem('Cor3')), gols2: parseInt(localStorage.getItem('Por3'))},
    {selecao1: 'Gana', selecao2: 'Uruguai', gols1: parseInt(localStorage.getItem('Gan3')), gols2: parseInt(localStorage.getItem('Uru3'))},
    {selecao1: 'Camarões', selecao2: 'Brasil', gols1: parseInt(localStorage.getItem('Cam3')), gols2: parseInt(localStorage.getItem('Bra3'))},
    {selecao1: 'Sérvia', selecao2: 'Suíça', gols1: parseInt(localStorage.getItem('Ser3')), gols2: parseInt(localStorage.getItem('Sui3'))}
]; // Array de objetos com todos os jogos na fase de grupo

for(let i in jogos){
    for(let j in paises){
        if(isNaN(jogos[i].gols1) && isNaN(jogos[i].gols2)){
        } //Alternativa para que o cálculo ignorasse os inputs vazios e não contabilizá-los previamente como 0x0
        else{ //Associo os dois arrays para atualizar os dados dos países com os dados dos jogos (gols feitos e recebidos por cada seleção)
            if(paises[j].nome == jogos[i].selecao1){
                paises[j].jogos += 1;
                paises[j].gp += jogos[i].gols1;
                paises[j].gc += jogos[i].gols2;
                paises[j].sg += jogos[i].gols1 - jogos[i].gols2;
                if(jogos[i].gols1 > jogos[i].gols2){
                    paises[j].pontos += 3;
                    paises[j].vitorias += 1;
                }
                else if (jogos[i].gols1 < jogos[i].gols2){
                    paises[j].derrotas += 1;
                }
                else {
                    paises[j].pontos += 1;
                    paises[j].empates += 1;
                }
            }
            else if(paises[j].nome == jogos[i].selecao2){
                paises[j].jogos += 1;
                paises[j].gp += jogos[i].gols2;
                paises[j].gc += jogos[i].gols1;
                paises[j].sg += jogos[i].gols2 - jogos[i].gols1;
                if(jogos[i].gols2 > jogos[i].gols1){
                    paises[j].pontos += 3;
                    paises[j].vitorias += 1;
                }
                else if (jogos[i].gols2 < jogos[i].gols1){
                    paises[j].derrotas += 1;
                }
                else {
                    paises[j].pontos += 1;
                    paises[j].empates += 1;
                }
            }
        }
    }
};

paises.sort(function(x, y){
    if (x.grupo > y.grupo){
        return 1;
    }
    if (x.grupo < y.grupo){
        return -1;
    }
    else{
        if (x.pontos < y.pontos){
            return 1;
        }
        if (x.pontos > y.pontos){
            return -1;
        }
        else {
            if (x.sg < y.sg){
                return 1;
            }
            if (x.sg > y.sg){
                return -1;
            }
            return y.gp-x.gp;
        }
    }
}); // Ordeno os países inicialmente por grupos (do A ao H), depois pelos seus pontos, saldo de gols e por último gols feitos

let arrayPontuacao = paises.map(function(obj){
    return Object.keys(obj).map(function(key){
        return obj[key];
    });
}); //Transformo o array de objetos em array de arrays

//Obs.: Ao colocar os grupos em ordem como prioridade, pude separar logicamente as ordens. 
// Por exemplo: A posicão zero e dos múltiplos de 4 representam os países que lideram a tabela em seus respectivos grupos,
// o segundo colocado de cada grupo seria representado por k+1, onde k = 0, 4, 8,..., o terceiro k+2 e o quarto k+3


function tabelaA(){

    let TabelaA = document.createElement('table');
    let CabecalhoA = document.createElement('thead');
    let CorpoA = document.createElement('tbody');

    TabelaA.appendChild(CabecalhoA);
    TabelaA.appendChild(CorpoA);

    document.getElementById('body').appendChild(TabelaA);

    let linhaA1 = document.createElement('tr');
    let selecaoA = document.createElement('th');
    selecaoA.innerHTML = "Seleção";
    let PA = document.createElement('th');
    PA.innerHTML = "Pontos";
    let JA = document.createElement('th');
    JA.innerHTML = "Jogos";
    let VA = document.createElement('th');
    VA.innerHTML = "Vitórias";
    let EA = document.createElement('th');
    EA.innerHTML = "Empates";
    let DA = document.createElement('th');
    DA.innerHTML = "Derrotas";
    let gpA = document.createElement('th');
    gpA.innerHTML = "GP";
    let gcA = document.createElement('th');
    gcA.innerHTML = "GC";
    let sgA = document.createElement('th');
    sgA.innerHTML = "SG";

    linhaA1.appendChild(selecaoA);
    linhaA1.appendChild(PA);
    linhaA1.appendChild(JA);
    linhaA1.appendChild(VA);
    linhaA1.appendChild(EA);
    linhaA1.appendChild(DA);
    linhaA1.appendChild(gpA);
    linhaA1.appendChild(gcA);
    linhaA1.appendChild(sgA);
    CabecalhoA.appendChild(linhaA1);

    let linhaA2 = document.createElement('tr');
    let selecaoA1 = document.createElement('td');
    selecaoA1.innerHTML = arrayPontuacao[0][0];
    let PA1 = document.createElement('td');
    PA1.innerHTML = arrayPontuacao[0][2];
    let JA1 = document.createElement('td');
    JA1.innerHTML = arrayPontuacao[0][3];
    let VA1 = document.createElement('td');
    VA1.innerHTML = arrayPontuacao[0][4];
    let EA1 = document.createElement('td');
    EA1.innerHTML = arrayPontuacao[0][5];
    let DA1 = document.createElement('td');
    DA1.innerHTML = arrayPontuacao[0][6];
    let gpA1 = document.createElement('td');
    gpA1.innerHTML = arrayPontuacao[0][7];
    let gcA1 = document.createElement('td');
    gcA1.innerHTML = arrayPontuacao[0][8];
    let sgA1 = document.createElement('td');
    sgA1.innerHTML = arrayPontuacao[0][9];

    linhaA2.appendChild(selecaoA1);
    linhaA2.appendChild(PA1);
    linhaA2.appendChild(JA1);
    linhaA2.appendChild(VA1);
    linhaA2.appendChild(EA1);
    linhaA2.appendChild(DA1);
    linhaA2.appendChild(gpA1);
    linhaA2.appendChild(gcA1);
    linhaA2.appendChild(sgA1);
    CorpoA.appendChild(linhaA2);

    let linhaA3 = document.createElement('tr');
    let selecaoA2 = document.createElement('td');
    selecaoA2.innerHTML = arrayPontuacao[1][0];
    let PA2 = document.createElement('td');
    PA2.innerHTML = arrayPontuacao[1][2];
    let JA2 = document.createElement('td');
    JA2.innerHTML = arrayPontuacao[1][3];
    let VA2 = document.createElement('td');
    VA2.innerHTML = arrayPontuacao[1][4];
    let EA2 = document.createElement('td');
    EA2.innerHTML = arrayPontuacao[1][5];
    let DA2 = document.createElement('td');
    DA2.innerHTML = arrayPontuacao[1][6];
    let gpA2 = document.createElement('td');
    gpA2.innerHTML = arrayPontuacao[1][7];
    let gcA2 = document.createElement('td');
    gcA2.innerHTML = arrayPontuacao[1][8];
    let sgA2 = document.createElement('td');
    sgA2.innerHTML = arrayPontuacao[1][9];

    linhaA3.appendChild(selecaoA2);
    linhaA3.appendChild(PA2);
    linhaA3.appendChild(JA2);
    linhaA3.appendChild(VA2);
    linhaA3.appendChild(EA2);
    linhaA3.appendChild(DA2);
    linhaA3.appendChild(gpA2);
    linhaA3.appendChild(gcA2);
    linhaA3.appendChild(sgA2);
    CorpoA.appendChild(linhaA3);

    let linhaA4 = document.createElement('tr');
    let selecaoA3 = document.createElement('td');
    selecaoA3.innerHTML = arrayPontuacao[2][0];
    let PA3 = document.createElement('td');
    PA3.innerHTML = arrayPontuacao[2][2];
    let JA3 = document.createElement('td');
    JA3.innerHTML = arrayPontuacao[2][3];
    let VA3 = document.createElement('td');
    VA3.innerHTML = arrayPontuacao[2][4];
    let EA3 = document.createElement('td');
    EA3.innerHTML = arrayPontuacao[2][5];
    let DA3 = document.createElement('td');
    DA3.innerHTML = arrayPontuacao[2][6];
    let gpA3 = document.createElement('td');
    gpA3.innerHTML = arrayPontuacao[2][7];
    let gcA3 = document.createElement('td');
    gcA3.innerHTML = arrayPontuacao[2][8];
    let sgA3 = document.createElement('td');
    sgA3.innerHTML = arrayPontuacao[2][9];

    linhaA4.appendChild(selecaoA3);
    linhaA4.appendChild(PA3);
    linhaA4.appendChild(JA3);
    linhaA4.appendChild(VA3);
    linhaA4.appendChild(EA3);
    linhaA4.appendChild(DA3);
    linhaA4.appendChild(gpA3);
    linhaA4.appendChild(gcA3);
    linhaA4.appendChild(sgA3);
    CorpoA.appendChild(linhaA4);

    let linhaA5 = document.createElement('tr');
    let selecaoA4 = document.createElement('td');
    selecaoA4.innerHTML = arrayPontuacao[3][0];
    let PA4 = document.createElement('td');
    PA4.innerHTML = arrayPontuacao[3][2];
    let JA4 = document.createElement('td');
    JA4.innerHTML = arrayPontuacao[3][3];
    let VA4 = document.createElement('td');
    VA4.innerHTML = arrayPontuacao[3][4];
    let EA4 = document.createElement('td');
    EA4.innerHTML = arrayPontuacao[3][5];
    let DA4 = document.createElement('td');
    DA4.innerHTML = arrayPontuacao[3][6];
    let gpA4 = document.createElement('td');
    gpA4.innerHTML = arrayPontuacao[3][7];
    let gcA4 = document.createElement('td');
    gcA4.innerHTML = arrayPontuacao[3][8];
    let sgA4 = document.createElement('td');
    sgA4.innerHTML = arrayPontuacao[3][9];

    linhaA5.appendChild(selecaoA4);
    linhaA5.appendChild(PA4);
    linhaA5.appendChild(JA4);
    linhaA5.appendChild(VA4);
    linhaA5.appendChild(EA4);
    linhaA5.appendChild(DA4);
    linhaA5.appendChild(gpA4);
    linhaA5.appendChild(gcA4);
    linhaA5.appendChild(sgA4);
    CorpoA.appendChild(linhaA5);
};

tabelaA();

function tabelaB(){

    let TabelaB = document.createElement('table');
    let CabecalhoB = document.createElement('thead');
    let CorpoB = document.createElement('tbody');

    TabelaB.appendChild(CabecalhoB);
    TabelaB.appendChild(CorpoB);

    document.getElementById('body').appendChild(TabelaB);

    let linhaB1 = document.createElement('tr');
    let selecaoB = document.createElement('th');
    selecaoB.innerHTML = "Seleção";
    let PB = document.createElement('th');
    PB.innerHTML = "Pontos";
    let JB = document.createElement('th');
    JB.innerHTML = "Jogos";
    let VB = document.createElement('th');
    VB.innerHTML = "Vitórias";
    let EB = document.createElement('th');
    EB.innerHTML = "Empates";
    let DB = document.createElement('th');
    DB.innerHTML = "Derrotas";
    let gpB = document.createElement('th');
    gpB.innerHTML = "GP";
    let gcB = document.createElement('th');
    gcB.innerHTML = "GC";
    let sgB = document.createElement('th');
    sgB.innerHTML = "SG";

    linhaB1.appendChild(selecaoB);
    linhaB1.appendChild(PB);
    linhaB1.appendChild(JB);
    linhaB1.appendChild(VB);
    linhaB1.appendChild(EB);
    linhaB1.appendChild(DB);
    linhaB1.appendChild(gpB);
    linhaB1.appendChild(gcB);
    linhaB1.appendChild(sgB);
    CabecalhoB.appendChild(linhaB1);

    let linhaB2 = document.createElement('tr');
    let selecaoB1 = document.createElement('td');
    selecaoB1.innerHTML = arrayPontuacao[4][0];
    let PB1 = document.createElement('td');
    PB1.innerHTML = arrayPontuacao[4][2];
    let JB1 = document.createElement('td');
    JB1.innerHTML = arrayPontuacao[4][3];
    let VB1 = document.createElement('td');
    VB1.innerHTML = arrayPontuacao[4][4];
    let EB1 = document.createElement('td');
    EB1.innerHTML = arrayPontuacao[4][5];
    let DB1 = document.createElement('td');
    DB1.innerHTML = arrayPontuacao[4][6];
    let gpB1 = document.createElement('td');
    gpB1.innerHTML = arrayPontuacao[4][7];
    let gcB1 = document.createElement('td');
    gcB1.innerHTML = arrayPontuacao[4][8];
    let sgB1 = document.createElement('td');
    sgB1.innerHTML = arrayPontuacao[4][9];

    linhaB2.appendChild(selecaoB1);
    linhaB2.appendChild(PB1);
    linhaB2.appendChild(JB1);
    linhaB2.appendChild(VB1);
    linhaB2.appendChild(EB1);
    linhaB2.appendChild(DB1);
    linhaB2.appendChild(gpB1);
    linhaB2.appendChild(gcB1);
    linhaB2.appendChild(sgB1);
    CorpoB.appendChild(linhaB2);

    let linhaB3 = document.createElement('tr');
    let selecaoB2 = document.createElement('td');
    selecaoB2.innerHTML = arrayPontuacao[5][0];
    let PB2 = document.createElement('td');
    PB2.innerHTML = arrayPontuacao[5][2];
    let JB2 = document.createElement('td');
    JB2.innerHTML = arrayPontuacao[5][3];
    let VB2 = document.createElement('td');
    VB2.innerHTML = arrayPontuacao[5][4];
    let EB2 = document.createElement('td');
    EB2.innerHTML = arrayPontuacao[5][5];
    let DB2 = document.createElement('td');
    DB2.innerHTML = arrayPontuacao[5][6];
    let gpB2 = document.createElement('td');
    gpB2.innerHTML = arrayPontuacao[5][7];
    let gcB2 = document.createElement('td');
    gcB2.innerHTML = arrayPontuacao[5][8];
    let sgB2 = document.createElement('td');
    sgB2.innerHTML = arrayPontuacao[5][9];

    linhaB3.appendChild(selecaoB2);
    linhaB3.appendChild(PB2);
    linhaB3.appendChild(JB2);
    linhaB3.appendChild(VB2);
    linhaB3.appendChild(EB2);
    linhaB3.appendChild(DB2);
    linhaB3.appendChild(gpB2);
    linhaB3.appendChild(gcB2);
    linhaB3.appendChild(sgB2);
    CorpoB.appendChild(linhaB3);

    let linhaB4 = document.createElement('tr');
    let selecaoB3 = document.createElement('td');
    selecaoB3.innerHTML = arrayPontuacao[6][0];
    let PB3 = document.createElement('td');
    PB3.innerHTML = arrayPontuacao[6][2];
    let JB3 = document.createElement('td');
    JB3.innerHTML = arrayPontuacao[6][3];
    let VB3 = document.createElement('td');
    VB3.innerHTML = arrayPontuacao[6][4];
    let EB3 = document.createElement('td');
    EB3.innerHTML = arrayPontuacao[6][5];
    let DB3 = document.createElement('td');
    DB3.innerHTML = arrayPontuacao[6][6];
    let gpB3 = document.createElement('td');
    gpB3.innerHTML = arrayPontuacao[6][7];
    let gcB3 = document.createElement('td');
    gcB3.innerHTML = arrayPontuacao[6][8];
    let sgB3 = document.createElement('td');
    sgB3.innerHTML = arrayPontuacao[6][9];

    linhaB4.appendChild(selecaoB3);
    linhaB4.appendChild(PB3);
    linhaB4.appendChild(JB3);
    linhaB4.appendChild(VB3);
    linhaB4.appendChild(EB3);
    linhaB4.appendChild(DB3);
    linhaB4.appendChild(gpB3);
    linhaB4.appendChild(gcB3);
    linhaB4.appendChild(sgB3);
    CorpoB.appendChild(linhaB4);

    let linhaB5 = document.createElement('tr');
    let selecaoB4 = document.createElement('td');
    selecaoB4.innerHTML = arrayPontuacao[7][0];
    let PB4 = document.createElement('td');
    PB4.innerHTML = arrayPontuacao[7][2];
    let JB4 = document.createElement('td');
    JB4.innerHTML = arrayPontuacao[7][3];
    let VB4 = document.createElement('td');
    VB4.innerHTML = arrayPontuacao[7][4];
    let EB4 = document.createElement('td');
    EB4.innerHTML = arrayPontuacao[7][5];
    let DB4 = document.createElement('td');
    DB4.innerHTML = arrayPontuacao[7][6];
    let gpB4 = document.createElement('td');
    gpB4.innerHTML = arrayPontuacao[7][7];
    let gcB4 = document.createElement('td');
    gcB4.innerHTML = arrayPontuacao[7][8];
    let sgB4 = document.createElement('td');
    sgB4.innerHTML = arrayPontuacao[7][9];

    linhaB5.appendChild(selecaoB4);
    linhaB5.appendChild(PB4);
    linhaB5.appendChild(JB4);
    linhaB5.appendChild(VB4);
    linhaB5.appendChild(EB4);
    linhaB5.appendChild(DB4);
    linhaB5.appendChild(gpB4);
    linhaB5.appendChild(gcB4);
    linhaB5.appendChild(sgB4);
    CorpoB.appendChild(linhaB5);
};

tabelaB();

function tabelaC(){

    let TabelaC = document.createElement('table');
    let CabecalhoC = document.createElement('thead');
    let CorpoC = document.createElement('tbody');

    TabelaC.appendChild(CabecalhoC);
    TabelaC.appendChild(CorpoC);

    document.getElementById('body').appendChild(TabelaC);

    let linhaC1 = document.createElement('tr');
    let selecaoC = document.createElement('th');
    selecaoC.innerHTML = "Seleção";
    let PC = document.createElement('th');
    PC.innerHTML = "Pontos";
    let JC = document.createElement('th');
    JC.innerHTML = "Jogos";
    let VC = document.createElement('th');
    VC.innerHTML = "Vitórias";
    let EC = document.createElement('th');
    EC.innerHTML = "Empates";
    let DC = document.createElement('th');
    DC.innerHTML = "Derrotas";
    let gpC = document.createElement('th');
    gpC.innerHTML = "GP";
    let gcC = document.createElement('th');
    gcC.innerHTML = "GC";
    let sgC = document.createElement('th');
    sgC.innerHTML = "SG";

    linhaC1.appendChild(selecaoC);
    linhaC1.appendChild(PC);
    linhaC1.appendChild(JC);
    linhaC1.appendChild(VC);
    linhaC1.appendChild(EC);
    linhaC1.appendChild(DC);
    linhaC1.appendChild(gpC);
    linhaC1.appendChild(gcC);
    linhaC1.appendChild(sgC);
    CabecalhoC.appendChild(linhaC1);

    let linhaC2 = document.createElement('tr');
    let selecaoC1 = document.createElement('td');
    selecaoC1.innerHTML = arrayPontuacao[8][0];
    let PC1 = document.createElement('td');
    PC1.innerHTML = arrayPontuacao[8][2];
    let JC1 = document.createElement('td');
    JC1.innerHTML = arrayPontuacao[8][3];
    let VC1 = document.createElement('td');
    VC1.innerHTML = arrayPontuacao[8][4];
    let EC1 = document.createElement('td');
    EC1.innerHTML = arrayPontuacao[8][5];
    let DC1 = document.createElement('td');
    DC1.innerHTML = arrayPontuacao[8][6];
    let gpC1 = document.createElement('td');
    gpC1.innerHTML = arrayPontuacao[8][7];
    let gcC1 = document.createElement('td');
    gcC1.innerHTML = arrayPontuacao[8][8];
    let sgC1 = document.createElement('td');
    sgC1.innerHTML = arrayPontuacao[8][9];

    linhaC2.appendChild(selecaoC1);
    linhaC2.appendChild(PC1);
    linhaC2.appendChild(JC1);
    linhaC2.appendChild(VC1);
    linhaC2.appendChild(EC1);
    linhaC2.appendChild(DC1);
    linhaC2.appendChild(gpC1);
    linhaC2.appendChild(gcC1);
    linhaC2.appendChild(sgC1);
    CorpoC.appendChild(linhaC2);

    let linhaC3 = document.createElement('tr');
    let selecaoC2 = document.createElement('td');
    selecaoC2.innerHTML = arrayPontuacao[9][0];
    let PC2 = document.createElement('td');
    PC2.innerHTML = arrayPontuacao[9][2];
    let JC2 = document.createElement('td');
    JC2.innerHTML = arrayPontuacao[9][3];
    let VC2 = document.createElement('td');
    VC2.innerHTML = arrayPontuacao[9][4];
    let EC2 = document.createElement('td');
    EC2.innerHTML = arrayPontuacao[9][5];
    let DC2 = document.createElement('td');
    DC2.innerHTML = arrayPontuacao[9][6];
    let gpC2 = document.createElement('td');
    gpC2.innerHTML = arrayPontuacao[9][7];
    let gcC2 = document.createElement('td');
    gcC2.innerHTML = arrayPontuacao[9][8];
    let sgC2 = document.createElement('td');
    sgC2.innerHTML = arrayPontuacao[9][9];

    linhaC3.appendChild(selecaoC2);
    linhaC3.appendChild(PC2);
    linhaC3.appendChild(JC2);
    linhaC3.appendChild(VC2);
    linhaC3.appendChild(EC2);
    linhaC3.appendChild(DC2);
    linhaC3.appendChild(gpC2);
    linhaC3.appendChild(gcC2);
    linhaC3.appendChild(sgC2);
    CorpoC.appendChild(linhaC3);

    let linhaC4 = document.createElement('tr');
    let selecaoC3 = document.createElement('td');
    selecaoC3.innerHTML = arrayPontuacao[10][0];
    let PC3 = document.createElement('td');
    PC3.innerHTML = arrayPontuacao[10][2];
    let JC3 = document.createElement('td');
    JC3.innerHTML = arrayPontuacao[10][3];
    let VC3 = document.createElement('td');
    VC3.innerHTML = arrayPontuacao[10][4];
    let EC3 = document.createElement('td');
    EC3.innerHTML = arrayPontuacao[10][5];
    let DC3 = document.createElement('td');
    DC3.innerHTML = arrayPontuacao[10][6];
    let gpC3 = document.createElement('td');
    gpC3.innerHTML = arrayPontuacao[10][7];
    let gcC3 = document.createElement('td');
    gcC3.innerHTML = arrayPontuacao[10][8];
    let sgC3 = document.createElement('td');
    sgC3.innerHTML = arrayPontuacao[10][9];

    linhaC4.appendChild(selecaoC3);
    linhaC4.appendChild(PC3);
    linhaC4.appendChild(JC3);
    linhaC4.appendChild(VC3);
    linhaC4.appendChild(EC3);
    linhaC4.appendChild(DC3);
    linhaC4.appendChild(gpC3);
    linhaC4.appendChild(gcC3);
    linhaC4.appendChild(sgC3);
    CorpoC.appendChild(linhaC4);

    let linhaC5 = document.createElement('tr');
    let selecaoC4 = document.createElement('td');
    selecaoC4.innerHTML = arrayPontuacao[11][0];
    let PC4 = document.createElement('td');
    PC4.innerHTML = arrayPontuacao[11][2];
    let JC4 = document.createElement('td');
    JC4.innerHTML = arrayPontuacao[11][3];
    let VC4 = document.createElement('td');
    VC4.innerHTML = arrayPontuacao[11][4];
    let EC4 = document.createElement('td');
    EC4.innerHTML = arrayPontuacao[11][5];
    let DC4 = document.createElement('td');
    DC4.innerHTML = arrayPontuacao[11][6];
    let gpC4 = document.createElement('td');
    gpC4.innerHTML = arrayPontuacao[11][7];
    let gcC4 = document.createElement('td');
    gcC4.innerHTML = arrayPontuacao[11][8];
    let sgC4 = document.createElement('td');
    sgC4.innerHTML = arrayPontuacao[11][9];

    linhaC5.appendChild(selecaoC4);
    linhaC5.appendChild(PC4);
    linhaC5.appendChild(JC4);
    linhaC5.appendChild(VC4);
    linhaC5.appendChild(EC4);
    linhaC5.appendChild(DC4);
    linhaC5.appendChild(gpC4);
    linhaC5.appendChild(gcC4);
    linhaC5.appendChild(sgC4);
    CorpoC.appendChild(linhaC5);
};

tabelaC();

function tabelaD(){

    let TabelaD = document.createElement('table');
    let CabecalhoD = document.createElement('thead');
    let CorpoD = document.createElement('tbody');

    TabelaD.appendChild(CabecalhoD);
    TabelaD.appendChild(CorpoD);

    document.getElementById('body').appendChild(TabelaD);

    let linhaD1 = document.createElement('tr');
    let selecaoD = document.createElement('th');
    selecaoD.innerHTML = "Seleção";
    let PD = document.createElement('th');
    PD.innerHTML = "Pontos";
    let JD = document.createElement('th');
    JD.innerHTML = "Jogos";
    let VD = document.createElement('th');
    VD.innerHTML = "Vitórias";
    let ED = document.createElement('th');
    ED.innerHTML = "Empates";
    let DD = document.createElement('th');
    DD.innerHTML = "Derrotas";
    let gpD = document.createElement('th');
    gpD.innerHTML = "GP";
    let gcD = document.createElement('th');
    gcD.innerHTML = "GC";
    let sgD = document.createElement('th');
    sgD.innerHTML = "SG";

    linhaD1.appendChild(selecaoD);
    linhaD1.appendChild(PD);
    linhaD1.appendChild(JD);
    linhaD1.appendChild(VD);
    linhaD1.appendChild(ED);
    linhaD1.appendChild(DD);
    linhaD1.appendChild(gpD);
    linhaD1.appendChild(gcD);
    linhaD1.appendChild(sgD);
    CabecalhoD.appendChild(linhaD1);

    let linhaD2 = document.createElement('tr');
    let selecaoD1 = document.createElement('td');
    selecaoD1.innerHTML = arrayPontuacao[12][0];
    let PD1 = document.createElement('td');
    PD1.innerHTML = arrayPontuacao[12][2];
    let JD1 = document.createElement('td');
    JD1.innerHTML = arrayPontuacao[12][3];
    let VD1 = document.createElement('td');
    VD1.innerHTML = arrayPontuacao[12][4];
    let ED1 = document.createElement('td');
    ED1.innerHTML = arrayPontuacao[12][5];
    let DD1 = document.createElement('td');
    DD1.innerHTML = arrayPontuacao[12][6];
    let gpD1 = document.createElement('td');
    gpD1.innerHTML = arrayPontuacao[12][7];
    let gcD1 = document.createElement('td');
    gcD1.innerHTML = arrayPontuacao[12][8];
    let sgD1 = document.createElement('td');
    sgD1.innerHTML = arrayPontuacao[12][9];

    linhaD2.appendChild(selecaoD1);
    linhaD2.appendChild(PD1);
    linhaD2.appendChild(JD1);
    linhaD2.appendChild(VD1);
    linhaD2.appendChild(ED1);
    linhaD2.appendChild(DD1);
    linhaD2.appendChild(gpD1);
    linhaD2.appendChild(gcD1);
    linhaD2.appendChild(sgD1);
    CorpoD.appendChild(linhaD2);

    let linhaD3 = document.createElement('tr');
    let selecaoD2 = document.createElement('td');
    selecaoD2.innerHTML = arrayPontuacao[13][0];
    let PD2 = document.createElement('td');
    PD2.innerHTML = arrayPontuacao[13][2];
    let JD2 = document.createElement('td');
    JD2.innerHTML = arrayPontuacao[13][3];
    let VD2 = document.createElement('td');
    VD2.innerHTML = arrayPontuacao[13][4];
    let ED2 = document.createElement('td');
    ED2.innerHTML = arrayPontuacao[13][5];
    let DD2 = document.createElement('td');
    DD2.innerHTML = arrayPontuacao[13][6];
    let gpD2 = document.createElement('td');
    gpD2.innerHTML = arrayPontuacao[13][7];
    let gcD2 = document.createElement('td');
    gcD2.innerHTML = arrayPontuacao[13][8];
    let sgD2 = document.createElement('td');
    sgD2.innerHTML = arrayPontuacao[13][9];

    linhaD3.appendChild(selecaoD2);
    linhaD3.appendChild(PD2);
    linhaD3.appendChild(JD2);
    linhaD3.appendChild(VD2);
    linhaD3.appendChild(ED2);
    linhaD3.appendChild(DD2);
    linhaD3.appendChild(gpD2);
    linhaD3.appendChild(gcD2);
    linhaD3.appendChild(sgD2);
    CorpoD.appendChild(linhaD3);

    let linhaD4 = document.createElement('tr');
    let selecaoD3 = document.createElement('td');
    selecaoD3.innerHTML = arrayPontuacao[14][0];
    let PD3 = document.createElement('td');
    PD3.innerHTML = arrayPontuacao[14][2];
    let JD3 = document.createElement('td');
    JD3.innerHTML = arrayPontuacao[14][3];
    let VD3 = document.createElement('td');
    VD3.innerHTML = arrayPontuacao[14][4];
    let ED3 = document.createElement('td');
    ED3.innerHTML = arrayPontuacao[14][5];
    let DD3 = document.createElement('td');
    DD3.innerHTML = arrayPontuacao[14][6];
    let gpD3 = document.createElement('td');
    gpD3.innerHTML = arrayPontuacao[14][7];
    let gcD3 = document.createElement('td');
    gcD3.innerHTML = arrayPontuacao[14][8];
    let sgD3 = document.createElement('td');
    sgD3.innerHTML = arrayPontuacao[14][9];

    linhaD4.appendChild(selecaoD3);
    linhaD4.appendChild(PD3);
    linhaD4.appendChild(JD3);
    linhaD4.appendChild(VD3);
    linhaD4.appendChild(ED3);
    linhaD4.appendChild(DD3);
    linhaD4.appendChild(gpD3);
    linhaD4.appendChild(gcD3);
    linhaD4.appendChild(sgD3);
    CorpoD.appendChild(linhaD4);

    let linhaD5 = document.createElement('tr');
    let selecaoD4 = document.createElement('td');
    selecaoD4.innerHTML = arrayPontuacao[15][0];
    let PD4 = document.createElement('td');
    PD4.innerHTML = arrayPontuacao[15][2];
    let JD4 = document.createElement('td');
    JD4.innerHTML = arrayPontuacao[15][3];
    let VD4 = document.createElement('td');
    VD4.innerHTML = arrayPontuacao[15][4];
    let ED4 = document.createElement('td');
    ED4.innerHTML = arrayPontuacao[15][5];
    let DD4 = document.createElement('td');
    DD4.innerHTML = arrayPontuacao[15][6];
    let gpD4 = document.createElement('td');
    gpD4.innerHTML = arrayPontuacao[15][7];
    let gcD4 = document.createElement('td');
    gcD4.innerHTML = arrayPontuacao[15][8];
    let sgD4 = document.createElement('td');
    sgD4.innerHTML = arrayPontuacao[15][9];

    linhaD5.appendChild(selecaoD4);
    linhaD5.appendChild(PD4);
    linhaD5.appendChild(JD4);
    linhaD5.appendChild(VD4);
    linhaD5.appendChild(ED4);
    linhaD5.appendChild(DD4);
    linhaD5.appendChild(gpD4);
    linhaD5.appendChild(gcD4);
    linhaD5.appendChild(sgD4);
    CorpoD.appendChild(linhaD5);
};

tabelaD();

function tabelaE(){
    let TabelaE = document.createElement('table');
    let CabecalhoE = document.createElement('thead');
    let CorpoE = document.createElement('tbody');

    TabelaE.appendChild(CabecalhoE);
    TabelaE.appendChild(CorpoE);

    document.getElementById('body').appendChild(TabelaE);

    let linhaE1 = document.createElement('tr');
    let selecaoE = document.createElement('th');
    selecaoE.innerHTML = "Seleção";
    let PE = document.createElement('th');
    PE.innerHTML = "Pontos";
    let JE = document.createElement('th');
    JE.innerHTML = "Jogos";
    let VE = document.createElement('th');
    VE.innerHTML = "Vitórias";
    let EE = document.createElement('th');
    EE.innerHTML = "Empates";
    let DE = document.createElement('th');
    DE.innerHTML = "Derrotas";
    let gpE = document.createElement('th');
    gpE.innerHTML = "GP";
    let gcE = document.createElement('th');
    gcE.innerHTML = "GC";
    let sgE = document.createElement('th');
    sgE.innerHTML = "SG";

    linhaE1.appendChild(selecaoE);
    linhaE1.appendChild(PE);
    linhaE1.appendChild(JE);
    linhaE1.appendChild(VE);
    linhaE1.appendChild(EE);
    linhaE1.appendChild(DE);
    linhaE1.appendChild(gpE);
    linhaE1.appendChild(gcE);
    linhaE1.appendChild(sgE);
    CabecalhoE.appendChild(linhaE1);

    let linhaE2 = document.createElement('tr');
    let selecaoE1 = document.createElement('td');
    selecaoE1.innerHTML = arrayPontuacao[16][0];
    let PE1 = document.createElement('td');
    PE1.innerHTML = arrayPontuacao[16][2];
    let JE1 = document.createElement('td');
    JE1.innerHTML = arrayPontuacao[16][3];
    let VE1 = document.createElement('td');
    VE1.innerHTML = arrayPontuacao[16][4];
    let EE1 = document.createElement('td');
    EE1.innerHTML = arrayPontuacao[16][5];
    let DE1 = document.createElement('td');
    DE1.innerHTML = arrayPontuacao[16][6];
    let gpE1 = document.createElement('td');
    gpE1.innerHTML = arrayPontuacao[16][7];
    let gcE1 = document.createElement('td');
    gcE1.innerHTML = arrayPontuacao[16][8];
    let sgE1 = document.createElement('td');
    sgE1.innerHTML = arrayPontuacao[16][9];

    linhaE2.appendChild(selecaoE1);
    linhaE2.appendChild(PE1);
    linhaE2.appendChild(JE1);
    linhaE2.appendChild(VE1);
    linhaE2.appendChild(EE1);
    linhaE2.appendChild(DE1);
    linhaE2.appendChild(gpE1);
    linhaE2.appendChild(gcE1);
    linhaE2.appendChild(sgE1);
    CorpoE.appendChild(linhaE2);

    let linhaE3 = document.createElement('tr');
    let selecaoE2 = document.createElement('td');
    selecaoE2.innerHTML = arrayPontuacao[17][0];
    let PE2 = document.createElement('td');
    PE2.innerHTML = arrayPontuacao[17][2];
    let JE2 = document.createElement('td');
    JE2.innerHTML = arrayPontuacao[17][3];
    let VE2 = document.createElement('td');
    VE2.innerHTML = arrayPontuacao[17][4];
    let EE2 = document.createElement('td');
    EE2.innerHTML = arrayPontuacao[17][5];
    let DE2 = document.createElement('td');
    DE2.innerHTML = arrayPontuacao[17][6];
    let gpE2 = document.createElement('td');
    gpE2.innerHTML = arrayPontuacao[17][7];
    let gcE2 = document.createElement('td');
    gcE2.innerHTML = arrayPontuacao[17][8];
    let sgE2 = document.createElement('td');
    sgE2.innerHTML = arrayPontuacao[17][9];

    linhaE3.appendChild(selecaoE2);
    linhaE3.appendChild(PE2);
    linhaE3.appendChild(JE2);
    linhaE3.appendChild(VE2);
    linhaE3.appendChild(EE2);
    linhaE3.appendChild(DE2);
    linhaE3.appendChild(gpE2);
    linhaE3.appendChild(gcE2);
    linhaE3.appendChild(sgE2);
    CorpoE.appendChild(linhaE3);

    let linhaE4 = document.createElement('tr');
    let selecaoE3 = document.createElement('td');
    selecaoE3.innerHTML = arrayPontuacao[18][0];
    let PE3 = document.createElement('td');
    PE3.innerHTML = arrayPontuacao[18][2];
    let JE3 = document.createElement('td');
    JE3.innerHTML = arrayPontuacao[18][3];
    let VE3 = document.createElement('td');
    VE3.innerHTML = arrayPontuacao[18][4];
    let EE3 = document.createElement('td');
    EE3.innerHTML = arrayPontuacao[18][5];
    let DE3 = document.createElement('td');
    DE3.innerHTML = arrayPontuacao[18][6];
    let gpE3 = document.createElement('td');
    gpE3.innerHTML = arrayPontuacao[18][7];
    let gcE3 = document.createElement('td');
    gcE3.innerHTML = arrayPontuacao[18][8];
    let sgE3 = document.createElement('td');
    sgE3.innerHTML = arrayPontuacao[18][9];

    linhaE4.appendChild(selecaoE3);
    linhaE4.appendChild(PE3);
    linhaE4.appendChild(JE3);
    linhaE4.appendChild(VE3);
    linhaE4.appendChild(EE3);
    linhaE4.appendChild(DE3);
    linhaE4.appendChild(gpE3);
    linhaE4.appendChild(gcE3);
    linhaE4.appendChild(sgE3);
    CorpoE.appendChild(linhaE4);

    let linhaE5 = document.createElement('tr');
    let selecaoE4 = document.createElement('td');
    selecaoE4.innerHTML = arrayPontuacao[19][0];
    let PE4 = document.createElement('td');
    PE4.innerHTML = arrayPontuacao[19][2];
    let JE4 = document.createElement('td');
    JE4.innerHTML = arrayPontuacao[19][3];
    let VE4 = document.createElement('td');
    VE4.innerHTML = arrayPontuacao[19][4];
    let EE4 = document.createElement('td');
    EE4.innerHTML = arrayPontuacao[19][5];
    let DE4 = document.createElement('td');
    DE4.innerHTML = arrayPontuacao[19][6];
    let gpE4 = document.createElement('td');
    gpE4.innerHTML = arrayPontuacao[19][7];
    let gcE4 = document.createElement('td');
    gcE4.innerHTML = arrayPontuacao[19][8];
    let sgE4 = document.createElement('td');
    sgE4.innerHTML = arrayPontuacao[19][9];

    linhaE5.appendChild(selecaoE4);
    linhaE5.appendChild(PE4);
    linhaE5.appendChild(JE4);
    linhaE5.appendChild(VE4);
    linhaE5.appendChild(EE4);
    linhaE5.appendChild(DE4);
    linhaE5.appendChild(gpE4);
    linhaE5.appendChild(gcE4);
    linhaE5.appendChild(sgE4);
    CorpoE.appendChild(linhaE5);
};

tabelaE();

function tabelaF(){
    let TabelaF = document.createElement('table');
    let CabecalhoF = document.createElement('thead');
    let CorpoF = document.createElement('tbody');

    TabelaF.appendChild(CabecalhoF);
    TabelaF.appendChild(CorpoF);

    document.getElementById('body').appendChild(TabelaF);

    let linhaF1 = document.createElement('tr');
    let selecaoF = document.createElement('th');
    selecaoF.innerHTML = "Seleção";
    let PF = document.createElement('th');
    PF.innerHTML = "Pontos";
    let JF = document.createElement('th');
    JF.innerHTML = "Jogos";
    let VF = document.createElement('th');
    VF.innerHTML = "Vitórias";
    let EF = document.createElement('th');
    EF.innerHTML = "Empates";
    let DF = document.createElement('th');
    DF.innerHTML = "Derrotas";
    let gpF = document.createElement('th');
    gpF.innerHTML = "GP";
    let gcF = document.createElement('th');
    gcF.innerHTML = "GC";
    let sgF = document.createElement('th');
    sgF.innerHTML = "SG";

    linhaF1.appendChild(selecaoF);
    linhaF1.appendChild(PF);
    linhaF1.appendChild(JF);
    linhaF1.appendChild(VF);
    linhaF1.appendChild(EF);
    linhaF1.appendChild(DF);
    linhaF1.appendChild(gpF);
    linhaF1.appendChild(gcF);
    linhaF1.appendChild(sgF);
    CabecalhoF.appendChild(linhaF1);

    let linhaF2 = document.createElement('tr');
    let selecaoF1 = document.createElement('td');
    selecaoF1.innerHTML = arrayPontuacao[20][0];
    let PF1 = document.createElement('td');
    PF1.innerHTML = arrayPontuacao[20][2];
    let JF1 = document.createElement('td');
    JF1.innerHTML = arrayPontuacao[20][3];
    let VF1 = document.createElement('td');
    VF1.innerHTML = arrayPontuacao[20][4];
    let EF1 = document.createElement('td');
    EF1.innerHTML = arrayPontuacao[20][5];
    let DF1 = document.createElement('td');
    DF1.innerHTML = arrayPontuacao[20][6];
    let gpF1 = document.createElement('td');
    gpF1.innerHTML = arrayPontuacao[20][7];
    let gcF1 = document.createElement('td');
    gcF1.innerHTML = arrayPontuacao[20][8];
    let sgF1 = document.createElement('td');
    sgF1.innerHTML = arrayPontuacao[20][9];

    linhaF2.appendChild(selecaoF1);
    linhaF2.appendChild(PF1);
    linhaF2.appendChild(JF1);
    linhaF2.appendChild(VF1);
    linhaF2.appendChild(EF1);
    linhaF2.appendChild(DF1);
    linhaF2.appendChild(gpF1);
    linhaF2.appendChild(gcF1);
    linhaF2.appendChild(sgF1);
    CorpoF.appendChild(linhaF2);

    let linhaF3 = document.createElement('tr');
    let selecaoF2 = document.createElement('td');
    selecaoF2.innerHTML = arrayPontuacao[21][0];
    let PF2 = document.createElement('td');
    PF2.innerHTML = arrayPontuacao[21][2];
    let JF2 = document.createElement('td');
    JF2.innerHTML = arrayPontuacao[21][3];
    let VF2 = document.createElement('td');
    VF2.innerHTML = arrayPontuacao[21][4];
    let EF2 = document.createElement('td');
    EF2.innerHTML = arrayPontuacao[21][5];
    let DF2 = document.createElement('td');
    DF2.innerHTML = arrayPontuacao[21][6];
    let gpF2 = document.createElement('td');
    gpF2.innerHTML = arrayPontuacao[21][7];
    let gcF2 = document.createElement('td');
    gcF2.innerHTML = arrayPontuacao[21][8];
    let sgF2 = document.createElement('td');
    sgF2.innerHTML = arrayPontuacao[21][9];

    linhaF3.appendChild(selecaoF2);
    linhaF3.appendChild(PF2);
    linhaF3.appendChild(JF2);
    linhaF3.appendChild(VF2);
    linhaF3.appendChild(EF2);
    linhaF3.appendChild(DF2);
    linhaF3.appendChild(gpF2);
    linhaF3.appendChild(gcF2);
    linhaF3.appendChild(sgF2);
    CorpoF.appendChild(linhaF3);

    let linhaF4 = document.createElement('tr');
    let selecaoF3 = document.createElement('td');
    selecaoF3.innerHTML = arrayPontuacao[22][0];
    let PF3 = document.createElement('td');
    PF3.innerHTML = arrayPontuacao[22][2];
    let JF3 = document.createElement('td');
    JF3.innerHTML = arrayPontuacao[22][3];
    let VF3 = document.createElement('td');
    VF3.innerHTML = arrayPontuacao[22][4];
    let EF3 = document.createElement('td');
    EF3.innerHTML = arrayPontuacao[22][5];
    let DF3 = document.createElement('td');
    DF3.innerHTML = arrayPontuacao[22][6];
    let gpF3 = document.createElement('td');
    gpF3.innerHTML = arrayPontuacao[22][7];
    let gcF3 = document.createElement('td');
    gcF3.innerHTML = arrayPontuacao[22][8];
    let sgF3 = document.createElement('td');
    sgF3.innerHTML = arrayPontuacao[22][9];

    linhaF4.appendChild(selecaoF3);
    linhaF4.appendChild(PF3);
    linhaF4.appendChild(JF3);
    linhaF4.appendChild(VF3);
    linhaF4.appendChild(EF3);
    linhaF4.appendChild(DF3);
    linhaF4.appendChild(gpF3);
    linhaF4.appendChild(gcF3);
    linhaF4.appendChild(sgF3);
    CorpoF.appendChild(linhaF4);

    let linhaF5 = document.createElement('tr');
    let selecaoF4 = document.createElement('td');
    selecaoF4.innerHTML = arrayPontuacao[23][0];
    let PF4 = document.createElement('td');
    PF4.innerHTML = arrayPontuacao[23][2];
    let JF4 = document.createElement('td');
    JF4.innerHTML = arrayPontuacao[23][3];
    let VF4 = document.createElement('td');
    VF4.innerHTML = arrayPontuacao[23][4];
    let EF4 = document.createElement('td');
    EF4.innerHTML = arrayPontuacao[23][5];
    let DF4 = document.createElement('td');
    DF4.innerHTML = arrayPontuacao[23][6];
    let gpF4 = document.createElement('td');
    gpF4.innerHTML = arrayPontuacao[23][7];
    let gcF4 = document.createElement('td');
    gcF4.innerHTML = arrayPontuacao[23][8];
    let sgF4 = document.createElement('td');
    sgF4.innerHTML = arrayPontuacao[23][9];

    linhaF5.appendChild(selecaoF4);
    linhaF5.appendChild(PF4);
    linhaF5.appendChild(JF4);
    linhaF5.appendChild(VF4);
    linhaF5.appendChild(EF4);
    linhaF5.appendChild(DF4);
    linhaF5.appendChild(gpF4);
    linhaF5.appendChild(gcF4);
    linhaF5.appendChild(sgF4);
    CorpoF.appendChild(linhaF5);
};

tabelaF();

function tabelaG(){
    let TabelaG = document.createElement('table');
    let CabecalhoG = document.createElement('thead');
    let CorpoG = document.createElement('tbody');

    TabelaG.appendChild(CabecalhoG);
    TabelaG.appendChild(CorpoG);

    document.getElementById('body').appendChild(TabelaG);

    let linhaG1 = document.createElement('tr');
    let selecaoG = document.createElement('th');
    selecaoG.innerHTML = "Seleção";
    let PG = document.createElement('th');
    PG.innerHTML = "Pontos";
    let JG = document.createElement('th');
    JG.innerHTML = "Jogos";
    let VG = document.createElement('th');
    VG.innerHTML = "Vitórias";
    let EG = document.createElement('th');
    EG.innerHTML = "Empates";
    let DG = document.createElement('th');
    DG.innerHTML = "Derrotas";
    let gpG = document.createElement('th');
    gpG.innerHTML = "GP";
    let gcG = document.createElement('th');
    gcG.innerHTML = "GC";
    let sgG = document.createElement('th');
    sgG.innerHTML = "SG";

    linhaG1.appendChild(selecaoG);
    linhaG1.appendChild(PG);
    linhaG1.appendChild(JG);
    linhaG1.appendChild(VG);
    linhaG1.appendChild(EG);
    linhaG1.appendChild(DG);
    linhaG1.appendChild(gpG);
    linhaG1.appendChild(gcG);
    linhaG1.appendChild(sgG);
    CabecalhoG.appendChild(linhaG1);

    let linhaG2 = document.createElement('tr');
    let selecaoG1 = document.createElement('td');
    selecaoG1.innerHTML = arrayPontuacao[24][0];
    let PG1 = document.createElement('td');
    PG1.innerHTML = arrayPontuacao[24][2];
    let JG1 = document.createElement('td');
    JG1.innerHTML = arrayPontuacao[24][3];
    let VG1 = document.createElement('td');
    VG1.innerHTML = arrayPontuacao[24][4];
    let EG1 = document.createElement('td');
    EG1.innerHTML = arrayPontuacao[24][5];
    let DG1 = document.createElement('td');
    DG1.innerHTML = arrayPontuacao[24][6];
    let gpG1 = document.createElement('td');
    gpG1.innerHTML = arrayPontuacao[24][7];
    let gcG1 = document.createElement('td');
    gcG1.innerHTML = arrayPontuacao[24][8];
    let sgG1 = document.createElement('td');
    sgG1.innerHTML = arrayPontuacao[24][9];

    linhaG2.appendChild(selecaoG1);
    linhaG2.appendChild(PG1);
    linhaG2.appendChild(JG1);
    linhaG2.appendChild(VG1);
    linhaG2.appendChild(EG1);
    linhaG2.appendChild(DG1);
    linhaG2.appendChild(gpG1);
    linhaG2.appendChild(gcG1);
    linhaG2.appendChild(sgG1);
    CorpoG.appendChild(linhaG2);

    let linhaG3 = document.createElement('tr');
    let selecaoG2 = document.createElement('td');
    selecaoG2.innerHTML = arrayPontuacao[25][0];
    let PG2 = document.createElement('td');
    PG2.innerHTML = arrayPontuacao[25][2];
    let JG2 = document.createElement('td');
    JG2.innerHTML = arrayPontuacao[25][3];
    let VG2 = document.createElement('td');
    VG2.innerHTML = arrayPontuacao[25][4];
    let EG2 = document.createElement('td');
    EG2.innerHTML = arrayPontuacao[25][5];
    let DG2 = document.createElement('td');
    DG2.innerHTML = arrayPontuacao[25][6];
    let gpG2 = document.createElement('td');
    gpG2.innerHTML = arrayPontuacao[25][7];
    let gcG2 = document.createElement('td');
    gcG2.innerHTML = arrayPontuacao[25][8];
    let sgG2 = document.createElement('td');
    sgG2.innerHTML = arrayPontuacao[25][9];

    linhaG3.appendChild(selecaoG2);
    linhaG3.appendChild(PG2);
    linhaG3.appendChild(JG2);
    linhaG3.appendChild(VG2);
    linhaG3.appendChild(EG2);
    linhaG3.appendChild(DG2);
    linhaG3.appendChild(gpG2);
    linhaG3.appendChild(gcG2);
    linhaG3.appendChild(sgG2);
    CorpoG.appendChild(linhaG3);

    let linhaG4 = document.createElement('tr');
    let selecaoG3 = document.createElement('td');
    selecaoG3.innerHTML = arrayPontuacao[26][0];
    let PG3 = document.createElement('td');
    PG3.innerHTML = arrayPontuacao[26][2];
    let JG3 = document.createElement('td');
    JG3.innerHTML = arrayPontuacao[26][3];
    let VG3 = document.createElement('td');
    VG3.innerHTML = arrayPontuacao[26][4];
    let EG3 = document.createElement('td');
    EG3.innerHTML = arrayPontuacao[26][5];
    let DG3 = document.createElement('td');
    DG3.innerHTML = arrayPontuacao[26][6];
    let gpG3 = document.createElement('td');
    gpG3.innerHTML = arrayPontuacao[26][7];
    let gcG3 = document.createElement('td');
    gcG3.innerHTML = arrayPontuacao[26][8];
    let sgG3 = document.createElement('td');
    sgG3.innerHTML = arrayPontuacao[26][9];

    linhaG4.appendChild(selecaoG3);
    linhaG4.appendChild(PG3);
    linhaG4.appendChild(JG3);
    linhaG4.appendChild(VG3);
    linhaG4.appendChild(EG3);
    linhaG4.appendChild(DG3);
    linhaG4.appendChild(gpG3);
    linhaG4.appendChild(gcG3);
    linhaG4.appendChild(sgG3);
    CorpoG.appendChild(linhaG4);

    let linhaG5 = document.createElement('tr');
    let selecaoG4 = document.createElement('td');
    selecaoG4.innerHTML = arrayPontuacao[27][0];
    let PG4 = document.createElement('td');
    PG4.innerHTML = arrayPontuacao[27][2];
    let JG4 = document.createElement('td');
    JG4.innerHTML = arrayPontuacao[27][3];
    let VG4 = document.createElement('td');
    VG4.innerHTML = arrayPontuacao[27][4];
    let EG4 = document.createElement('td');
    EG4.innerHTML = arrayPontuacao[27][5];
    let DG4 = document.createElement('td');
    DG4.innerHTML = arrayPontuacao[27][6];
    let gpG4 = document.createElement('td');
    gpG4.innerHTML = arrayPontuacao[27][7];
    let gcG4 = document.createElement('td');
    gcG4.innerHTML = arrayPontuacao[27][8];
    let sgG4 = document.createElement('td');
    sgG4.innerHTML = arrayPontuacao[27][9];

    linhaG5.appendChild(selecaoG4);
    linhaG5.appendChild(PG4);
    linhaG5.appendChild(JG4);
    linhaG5.appendChild(VG4);
    linhaG5.appendChild(EG4);
    linhaG5.appendChild(DG4);
    linhaG5.appendChild(gpG4);
    linhaG5.appendChild(gcG4);
    linhaG5.appendChild(sgG4);
    CorpoG.appendChild(linhaG5);
};

tabelaG();

function tabelaH(){
    let TabelaH = document.createElement('table');
    let CabecalhoH = document.createElement('thead');
    let CorpoH = document.createElement('tbody');

    TabelaH.appendChild(CabecalhoH);
    TabelaH.appendChild(CorpoH);

    document.getElementById('body').appendChild(TabelaH);

    let linhaH1 = document.createElement('tr');
    let selecaoH = document.createElement('th');
    selecaoH.innerHTML = "Seleção";
    let PH = document.createElement('th');
    PH.innerHTML = "Pontos";
    let JH = document.createElement('th');
    JH.innerHTML = "Jogos";
    let VH = document.createElement('th');
    VH.innerHTML = "Vitórias";
    let EH = document.createElement('th');
    EH.innerHTML = "Empates";
    let DH = document.createElement('th');
    DH.innerHTML = "Derrotas";
    let gpH = document.createElement('th');
    gpH.innerHTML = "GP";
    let gcH = document.createElement('th');
    gcH.innerHTML = "GC";
    let sgH = document.createElement('th');
    sgH.innerHTML = "SG";

    linhaH1.appendChild(selecaoH);
    linhaH1.appendChild(PH);
    linhaH1.appendChild(JH);
    linhaH1.appendChild(VH);
    linhaH1.appendChild(EH);
    linhaH1.appendChild(DH);
    linhaH1.appendChild(gpH);
    linhaH1.appendChild(gcH);
    linhaH1.appendChild(sgH);
    CabecalhoH.appendChild(linhaH1);

    let linhaH2 = document.createElement('tr');
    let selecaoH1 = document.createElement('td');
    selecaoH1.innerHTML = arrayPontuacao[28][0];
    let PH1 = document.createElement('td');
    PH1.innerHTML = arrayPontuacao[28][2];
    let JH1 = document.createElement('td');
    JH1.innerHTML = arrayPontuacao[28][3];
    let VH1 = document.createElement('td');
    VH1.innerHTML = arrayPontuacao[28][4];
    let EH1 = document.createElement('td');
    EH1.innerHTML = arrayPontuacao[28][5];
    let DH1 = document.createElement('td');
    DH1.innerHTML = arrayPontuacao[28][6];
    let gpH1 = document.createElement('td');
    gpH1.innerHTML = arrayPontuacao[28][7];
    let gcH1 = document.createElement('td');
    gcH1.innerHTML = arrayPontuacao[28][8];
    let sgH1 = document.createElement('td');
    sgH1.innerHTML = arrayPontuacao[28][9];

    linhaH2.appendChild(selecaoH1);
    linhaH2.appendChild(PH1);
    linhaH2.appendChild(JH1);
    linhaH2.appendChild(VH1);
    linhaH2.appendChild(EH1);
    linhaH2.appendChild(DH1);
    linhaH2.appendChild(gpH1);
    linhaH2.appendChild(gcH1);
    linhaH2.appendChild(sgH1);
    CorpoH.appendChild(linhaH2);

    let linhaH3 = document.createElement('tr');
    let selecaoH2 = document.createElement('td');
    selecaoH2.innerHTML = arrayPontuacao[29][0];
    let PH2 = document.createElement('td');
    PH2.innerHTML = arrayPontuacao[29][2];
    let JH2 = document.createElement('td');
    JH2.innerHTML = arrayPontuacao[29][3];
    let VH2 = document.createElement('td');
    VH2.innerHTML = arrayPontuacao[29][4];
    let EH2 = document.createElement('td');
    EH2.innerHTML = arrayPontuacao[29][5];
    let DH2 = document.createElement('td');
    DH2.innerHTML = arrayPontuacao[29][6];
    let gpH2 = document.createElement('td');
    gpH2.innerHTML = arrayPontuacao[29][7];
    let gcH2 = document.createElement('td');
    gcH2.innerHTML = arrayPontuacao[29][8];
    let sgH2 = document.createElement('td');
    sgH2.innerHTML = arrayPontuacao[29][9];

    linhaH3.appendChild(selecaoH2);
    linhaH3.appendChild(PH2);
    linhaH3.appendChild(JH2);
    linhaH3.appendChild(VH2);
    linhaH3.appendChild(EH2);
    linhaH3.appendChild(DH2);
    linhaH3.appendChild(gpH2);
    linhaH3.appendChild(gcH2);
    linhaH3.appendChild(sgH2);
    CorpoH.appendChild(linhaH3);

    let linhaH4 = document.createElement('tr');
    let selecaoH3 = document.createElement('td');
    selecaoH3.innerHTML = arrayPontuacao[30][0];
    let PH3 = document.createElement('td');
    PH3.innerHTML = arrayPontuacao[30][2];
    let JH3 = document.createElement('td');
    JH3.innerHTML = arrayPontuacao[30][3];
    let VH3 = document.createElement('td');
    VH3.innerHTML = arrayPontuacao[30][4];
    let EH3 = document.createElement('td');
    EH3.innerHTML = arrayPontuacao[30][5];
    let DH3 = document.createElement('td');
    DH3.innerHTML = arrayPontuacao[30][6];
    let gpH3 = document.createElement('td');
    gpH3.innerHTML = arrayPontuacao[30][7];
    let gcH3 = document.createElement('td');
    gcH3.innerHTML = arrayPontuacao[30][8];
    let sgH3 = document.createElement('td');
    sgH3.innerHTML = arrayPontuacao[30][9];

    linhaH4.appendChild(selecaoH3);
    linhaH4.appendChild(PH3);
    linhaH4.appendChild(JH3);
    linhaH4.appendChild(VH3);
    linhaH4.appendChild(EH3);
    linhaH4.appendChild(DH3);
    linhaH4.appendChild(gpH3);
    linhaH4.appendChild(gcH3);
    linhaH4.appendChild(sgH3);
    CorpoH.appendChild(linhaH4);

    let linhaH5 = document.createElement('tr');
    let selecaoH4 = document.createElement('td');
    selecaoH4.innerHTML = arrayPontuacao[31][0];
    let PH4 = document.createElement('td');
    PH4.innerHTML = arrayPontuacao[31][2];
    let JH4 = document.createElement('td');
    JH4.innerHTML = arrayPontuacao[31][3];
    let VH4 = document.createElement('td');
    VH4.innerHTML = arrayPontuacao[31][4];
    let EH4 = document.createElement('td');
    EH4.innerHTML = arrayPontuacao[31][5];
    let DH4 = document.createElement('td');
    DH4.innerHTML = arrayPontuacao[31][6];
    let gpH4 = document.createElement('td');
    gpH4.innerHTML = arrayPontuacao[31][7];
    let gcH4 = document.createElement('td');
    gcH4.innerHTML = arrayPontuacao[31][8];
    let sgH4 = document.createElement('td');
    sgH4.innerHTML = arrayPontuacao[31][9];

    linhaH5.appendChild(selecaoH4);
    linhaH5.appendChild(PH4);
    linhaH5.appendChild(JH4);
    linhaH5.appendChild(VH4);
    linhaH5.appendChild(EH4);
    linhaH5.appendChild(DH4);
    linhaH5.appendChild(gpH4);
    linhaH5.appendChild(gcH4);
    linhaH5.appendChild(sgH4);
    CorpoH.appendChild(linhaH5);
};

tabelaH();

let oitavas1,
    oitavas2,
    oitavas3,
    oitavas4,
    oitavas5,
    oitavas6,
    oitavas7,
    oitavas8,
    quartas1,
    quartas2,
    quartas3,
    quartas4,
    semi1,
    semi2,
    campeao,
    perdedor1,
    perdedor2,
    bandeiraO1,
    bandeiraO2,
    bandeiraO3,
    bandeiraO4,
    bandeiraO5,
    bandeiraO6,
    bandeiraO7,
    bandeiraO8,
    bandeiraQ1,
    bandeiraQ2,
    bandeiraQ3,
    bandeiraQ4,
    bandeiraS1,
    bandeiraS2,
    bandeiraPerdedor1,
    bandeiraPerdedor2,
    bandeiraCampeao;  

function oitavas(){

    // Oitavas 1

    if(parseInt(localStorage.getItem('golsA1')) > parseInt(localStorage.getItem('golsB2'))){
        oitavas1 = arrayPontuacao[0][0];
        bandeiraO1 = arrayPontuacao[0][10];
    }
    else if (parseInt(localStorage.getItem('golsA1')) < parseInt(localStorage.getItem('golsB2'))){
        oitavas1 = arrayPontuacao[5][0];
        bandeiraO1 = arrayPontuacao[5][10];
    }
    else{
        if(parseInt(localStorage.getItem('penaltisA1')) > parseInt(localStorage.getItem('penaltisB2'))){
            oitavas1 = arrayPontuacao[0][0];
            bandeiraO1 = arrayPontuacao[0][10];
        }
        else if (parseInt(localStorage.getItem('penaltisA1')) < parseInt(localStorage.getItem('penaltisB2'))){
            oitavas1 = arrayPontuacao[5][0];
            bandeiraO1 = arrayPontuacao[5][10];
        }
    };

    // Oitavas 2

    if(parseInt(localStorage.getItem('golsC1')) > parseInt(localStorage.getItem('golsD2'))){
        oitavas2 = arrayPontuacao[8][0];
        bandeiraO2 = arrayPontuacao[8][10];
    }
    else if (parseInt(localStorage.getItem('golsC1')) < parseInt(localStorage.getItem('golsD2'))){
        oitavas2 = arrayPontuacao[13][0];
        bandeiraO2 = arrayPontuacao[13][10];
    }
    else{
        if(parseInt(localStorage.getItem('penaltisC1')) > parseInt(localStorage.getItem('penaltisD2'))){
            oitavas2 = arrayPontuacao[8][0];
            bandeiraO2 = arrayPontuacao[8][10];
        }
        else if (parseInt(localStorage.getItem('penaltisC1')) < parseInt(localStorage.getItem('penaltisD2'))){
            oitavas2 = arrayPontuacao[13][0];
            bandeiraO2 = arrayPontuacao[13][10];
        }
    };

    // Oitavas 3

    if(parseInt(localStorage.getItem('golsE1')) > parseInt(localStorage.getItem('golsF2'))){
        oitavas3 = arrayPontuacao[16][0];
        bandeiraO3 = arrayPontuacao[16][10];
    }
    else if (parseInt(localStorage.getItem('golsE1')) < parseInt(localStorage.getItem('golsF2'))){
        oitavas3 = arrayPontuacao[21][0];
        bandeiraOs3 = arrayPontuacao[21][10];
    }
    else{
        if(parseInt(localStorage.getItem('penaltisE1')) > parseInt(localStorage.getItem('penaltisF2'))){
            oitavas3 = arrayPontuacao[16][0];
            bandeiraO3 = arrayPontuacao[16][10];
        }
        else if (parseInt(localStorage.getItem('penaltisE1')) < parseInt(localStorage.getItem('penaltisF2'))){
            oitavas3 = arrayPontuacao[21][0];
            bandeiraO3 = arrayPontuacao[21][10];
        }
    };

    // Oitavas 4

    if(parseInt(localStorage.getItem('golsG1')) > parseInt(localStorage.getItem('golsH2'))){
        oitavas4 = arrayPontuacao[24][0];
        bandeiraO4 = arrayPontuacao[24][10];
    }
    else if (parseInt(localStorage.getItem('golsG1')) < parseInt(localStorage.getItem('golsH2'))){
        oitavas4 = arrayPontuacao[29][0];
        bandeiraO4 = arrayPontuacao[29][10];
    }
    else{
        if(parseInt(localStorage.getItem('penaltisG1')) > parseInt(localStorage.getItem('penaltisH2'))){
            oitavas4 = arrayPontuacao[24][0];
            bandeiraO4 = arrayPontuacao[24][10];
        }
        else if (parseInt(localStorage.getItem('penaltisG1')) < parseInt(localStorage.getItem('penaltisH2'))){
            oitavas4 = arrayPontuacao[29][0];
            bandeiraO4 = arrayPontuacao[29][10];
        }
    };

    // Oitavas 5

    if(parseInt(localStorage.getItem('golsB1')) > parseInt(localStorage.getItem('golsA2'))){
        oitavas5 = arrayPontuacao[5][0];
        bandeiraO5 = arrayPontuacao[5][10];
    }
    else if (parseInt(localStorage.getItem('golsB1')) < parseInt(localStorage.getItem('golsA2'))){
        oitavas5 = arrayPontuacao[1][0];
        bandeiraO5 = arrayPontuacao[1][10];
    }
    else{
        if(parseInt(localStorage.getItem('penaltisB1')) > parseInt(localStorage.getItem('penaltisA2'))){
            oitavas5 = arrayPontuacao[5][0];
            bandeiraO5 = arrayPontuacao[5][10];
        }
        else if (parseInt(localStorage.getItem('penaltisB1')) < parseInt(localStorage.getItem('penaltisA2'))){
            oitavas5 = arrayPontuacao[1][0];
            bandeiraO5 = arrayPontuacao[1][10];
        }
    };

    // Oitavas 6

    if(parseInt(localStorage.getItem('golsD1')) > parseInt(localStorage.getItem('golsC2'))){
        oitavas6 = arrayPontuacao[12][0];
        bandeiraO6 = arrayPontuacao[12][10];
    }
    else if (parseInt(localStorage.getItem('golsD1')) < parseInt(localStorage.getItem('golsC2'))){
        oitavas6 = arrayPontuacao[9][0];
        bandeiraO6 = arrayPontuacao[9][10];
    }
    else{
        if(parseInt(localStorage.getItem('penaltisD1')) > parseInt(localStorage.getItem('penaltisC2'))){
            oitavas6 = arrayPontuacao[12][0];
            bandeiraO6 = arrayPontuacao[12][10];
        }
        else if (parseInt(localStorage.getItem('penaltisD1')) < parseInt(localStorage.getItem('penaltisC2'))){
            oitavas6 = arrayPontuacao[9][0];
            bandeiraO6 = arrayPontuacao[9][10];
        }
    };

    // Oitavas 7

    if(parseInt(localStorage.getItem('golsF1')) > parseInt(localStorage.getItem('golsE2'))){
        oitavas7 = arrayPontuacao[20][0];
        bandeiraO7 = arrayPontuacao[20][10];
    }
    else if (parseInt(localStorage.getItem('golsF1')) < parseInt(localStorage.getItem('golsE2'))){
        oitavas7 = arrayPontuacao[17][0];
        bandeiraO7 = arrayPontuacao[17][10];
    }
    else{
        if(parseInt(localStorage.getItem('penaltisF1')) > parseInt(localStorage.getItem('penaltisE2'))){
            oitavas7 = arrayPontuacao[20][0];
            bandeiraO7 = arrayPontuacao[20][10];
        }
        else if (parseInt(localStorage.getItem('penaltisF1')) < parseInt(localStorage.getItem('penaltisE2'))){
            oitavas7 = arrayPontuacao[17][0];
            bandeiraO7 = arrayPontuacao[17][10];
        }
    };

    // Oitavas 8

    if(parseInt(localStorage.getItem('golsH1')) > parseInt(localStorage.getItem('golsG2'))){
        oitavas8 = arrayPontuacao[28][0];
        bandeiraO8 = arrayPontuacao[28][10];
    }
    else if (parseInt(localStorage.getItem('golsH1')) < parseInt(localStorage.getItem('golsG2'))){
        oitavas8 = arrayPontuacao[25][0];
        bandeiraO8 = arrayPontuacao[25][10];
    }
    else{
        if(parseInt(localStorage.getItem('penaltisH1')) > parseInt(localStorage.getItem('penaltisG2'))){
            oitavas8 = arrayPontuacao[28][0];
            bandeiraO8 = arrayPontuacao[28][10];
        }
        else if (parseInt(localStorage.getItem('penaltisH1')) < parseInt(localStorage.getItem('penaltisG2'))){
            oitavas8 = arrayPontuacao[25][0];
            bandeiraO8 = arrayPontuacao[25][10];
        }
    };
};

oitavas();

function quartas(){

    // Quartas 1

    if(parseInt(localStorage.getItem('golsO1')) > parseInt(localStorage.getItem('golsO2'))){
        quartas1 = oitavas1;
        bandeiraQ1 = bandeiraO1;
    }
    else if (parseInt(localStorage.getItem('golsO1')) < parseInt(localStorage.getItem('golsO2'))){
        quartas1 = oitavas2;
        bandeiraQ1 = bandeiraO2;
    }
    else{
        if(parseInt(localStorage.getItem('penaltisO1')) > parseInt(localStorage.getItem('penaltisO2'))){
            quartas1 = oitavas1;
            bandeiraQ1 = bandeiraO1;
        }
        else if (parseInt(localStorage.getItem('penaltisO1')) < parseInt(localStorage.getItem('penaltisO2'))){
            quartas1 = oitavas2;
            bandeiraQ1 = bandeiraO2;
        }
    };

    // Quartas 2

    if(parseInt(localStorage.getItem('golsO3')) > parseInt(localStorage.getItem('golsO4'))){
        quartas2 = oitavas3;
        bandeiraQ2 = bandeiraO3;
    }
    else if (parseInt(localStorage.getItem('golsO3')) < parseInt(localStorage.getItem('golsO4'))){
        quartas2 = oitavas4;
        bandeiraQ2 = bandeiraO4;
    }
    else{
        if(parseInt(localStorage.getItem('penaltisO3')) > parseInt(localStorage.getItem('penaltisO4'))){
            quartas2 = oitavas3;
            bandeiraQ2 = bandeiraO3;
        }
        else if (parseInt(localStorage.getItem('penaltisO3')) < parseInt(localStorage.getItem('penaltisO4'))){
            quartas2 = oitavas4;
            bandeiraQ2 = bandeiraO4;
        }
    };

    // Quartas 3

    if(parseInt(localStorage.getItem('golsO5')) > parseInt(localStorage.getItem('golsO6'))){
        quartas3 = oitavas5;
        bandeiraQ3 = bandeiraO5;
    }
    else if (parseInt(localStorage.getItem('golsO5')) < parseInt(localStorage.getItem('golsO6'))){
        quartas3 = oitavas6;
        bandeiraQ3 = bandeiraO6;
    }
    else{
        if(parseInt(localStorage.getItem('penaltisO5')) > parseInt(localStorage.getItem('penaltisO6'))){
            quartas3 = oitavas5;
            bandeiraQ3 = bandeiraO5;
        }
        else if (parseInt(localStorage.getItem('penaltisO5')) < parseInt(localStorage.getItem('penaltisO6'))){
            quartas3 = oitavas6;
            bandeiraQ3 = bandeiraO6;
        }
    };

    // Quartas 4

    if(parseInt(localStorage.getItem('golsO7')) > parseInt(localStorage.getItem('golsO8'))){
        quartas4 = oitavas7;
        bandeiraQ4 = bandeiraO7;
    }
    else if (parseInt(localStorage.getItem('golsO7')) < parseInt(localStorage.getItem('golsO8'))){
        quartas4 = oitavas8;
        bandeiraQ4 = bandeiraO8;
    }
    else{
        if(parseInt(localStorage.getItem('penaltisO7')) > parseInt(localStorage.getItem('penaltisO8'))){
            quartas4 = oitavas7;
            bandeiraQ4 = bandeiraO7;
        }
        else if (parseInt(localStorage.getItem('penaltisO7')) < parseInt(localStorage.getItem('penaltisO8'))){
            quartas4 = oitavas8;
            bandeiraQ4 = bandeiraO8;
        }
    };
}; 

quartas();

function semis(){

    // Semis 1

    if(parseInt(localStorage.getItem('golsQ1')) > parseInt(localStorage.getItem('golsQ2'))){
        semi1 = quartas1;
        bandeiraS1 = bandeiraQ1;
        perdedor1 = quartas2;
        bandeiraPerdedor1 = bandeiraQ2;
    }
    else if (parseInt(localStorage.getItem('golsQ1')) < parseInt(localStorage.getItem('golsQ2'))){
        semi1 = quartas2;
        bandeiraS1 = bandeiraQ2;
        perdedor1 = quartas1;
        bandeiraPerdedor1 = bandeiraQ1;
    }
    else{
        if(parseInt(localStorage.getItem('penaltisQ1')) > parseInt(localStorage.getItem('penaltisQ2'))){
            semi1 = quartas1;
            bandeiraS1 = bandeiraQ1;
            perdedor1 = quartas2;
            bandeiraPerdedor1 = bandeiraQ2;
        }
        else if (parseInt(localStorage.getItem('penaltisQ1')) < parseInt(localStorage.getItem('penaltisQ2'))){
            semi1 = quartas2;
            bandeiraS1 = bandeiraQ2;
            perdedor1 = quartas1;
            bandeiraPerdedor1 = bandeiraQ1;
        }
    };

    // Semis 2

    if(parseInt(localStorage.getItem('golsQ3')) > parseInt(localStorage.getItem('golsQ4'))){
        semi2 = quartas3;
        bandeiraS2 = bandeiraQ3;
        perdedor2 = quartas4;
        bandeiraPerdedor2 = bandeiraQ4;
    }
    else if (parseInt(localStorage.getItem('golsQ3')) < parseInt(localStorage.getItem('golsQ4'))){
        semi2 = quartas4;
        bandeiraS2 = bandeiraQ4;
        perdedor2 = quartas3;
        bandeiraPerdedor2 = bandeiraQ3;
    }
    else{
        if(parseInt(localStorage.getItem('penaltisQ3')) > parseInt(localStorage.getItem('penaltisQ4'))){
            semi2 = quartas3;
            bandeiraS2 = bandeiraQ3;
            perdedor2 = quartas4;
            bandeiraPerdedor2 = bandeiraQ4;
        }
        else if (parseInt(localStorage.getItem('penaltisQ3')) < parseInt(localStorage.getItem('penaltisQ4'))){
            semi2 = quartas4;
            bandeiraS2 = bandeiraQ4;
            perdedor2 = quartas3;
            bandeiraPerdedor2 = bandeiraQ3;
        }
    };
};

semis();

function final(){
    if(parseInt(localStorage.getItem('golsS1')) > parseInt(localStorage.getItem('golsS2'))){
        campeao = semi1;
        bandeiraCampeao = bandeiraS1;
    }
    else if (parseInt(localStorage.getItem('golsS1')) < parseInt(localStorage.getItem('golsS2'))){
        campeao = semi2;
        bandeiraCampeao = bandeiraS2;
    }
    else{
        if(parseInt(localStorage.getItem('penaltisS1')) > parseInt(localStorage.getItem('penaltisS2'))){
            campeao = semi1;
            bandeiraCampeao = bandeiraS1;
        }
        else if (parseInt(localStorage.getItem('penaltisS1')) < parseInt(localStorage.getItem('penaltisS2'))){
            campeao = semi2;
            bandeiraCampeao = bandeiraS2;
        }
    };
}; 

final();

function Atualizar(){
    localStorage.setItem('A1', document.getElementById('A1').innerHTML = arrayPontuacao[0][0]);
    localStorage.setItem('bandeiraA1', arrayPontuacao[0][10]);
    localStorage.setItem('A2', document.getElementById('A2').innerHTML = arrayPontuacao[1][0]);
    localStorage.setItem('bandeiraA2', arrayPontuacao[1][10]);
    localStorage.setItem('B1', document.getElementById('B1').innerHTML = arrayPontuacao[4][0]);
    localStorage.setItem('bandeiraB1', arrayPontuacao[4][10]);
    localStorage.setItem('B2', document.getElementById('B2').innerHTML = arrayPontuacao[5][0]);
    localStorage.setItem('bandeiraB2', arrayPontuacao[5][10]);
    localStorage.setItem('C1', document.getElementById('C1').innerHTML = arrayPontuacao[8][0]);
    localStorage.setItem('bandeiraC1', arrayPontuacao[8][10]);
    localStorage.setItem('C2', document.getElementById('C2').innerHTML = arrayPontuacao[9][0]);
    localStorage.setItem('bandeiraC2', arrayPontuacao[9][10]);
    localStorage.setItem('D1', document.getElementById('D1').innerHTML = arrayPontuacao[12][0]);
    localStorage.setItem('bandeiraD1', arrayPontuacao[12][10]);
    localStorage.setItem('D2', document.getElementById('D2').innerHTML = arrayPontuacao[13][0]);
    localStorage.setItem('bandeiraD2', arrayPontuacao[13][10]);
    localStorage.setItem('E1', document.getElementById('E1').innerHTML = arrayPontuacao[16][0]);
    localStorage.setItem('bandeiraE1', arrayPontuacao[16][10]);
    localStorage.setItem('E2', document.getElementById('E2').innerHTML = arrayPontuacao[17][0]);
    localStorage.setItem('bandeiraE2', arrayPontuacao[17][10]);
    localStorage.setItem('F1', document.getElementById('F1').innerHTML = arrayPontuacao[20][0]);
    localStorage.setItem('bandeiraF1', arrayPontuacao[20][10]);
    localStorage.setItem('F2', document.getElementById('F2').innerHTML = arrayPontuacao[21][0]);
    localStorage.setItem('bandeiraF2', arrayPontuacao[21][10]);
    localStorage.setItem('G1', document.getElementById('G1').innerHTML = arrayPontuacao[24][0]);
    localStorage.setItem('bandeiraG1', arrayPontuacao[24][10]);
    localStorage.setItem('G2', document.getElementById('G2').innerHTML = arrayPontuacao[25][0]);
    localStorage.setItem('bandeiraG2', arrayPontuacao[25][10]);
    localStorage.setItem('H1', document.getElementById('H1').innerHTML = arrayPontuacao[28][0]);
    localStorage.setItem('bandeiraH1', arrayPontuacao[28][10]);
    localStorage.setItem('H2', document.getElementById('H2').innerHTML = arrayPontuacao[29][0]);
    localStorage.setItem('bandeiraH2', arrayPontuacao[29][10]);
    localStorage.setItem('golsA1', document.getElementById('golsA1').value);
    localStorage.setItem('golsA2', document.getElementById('golsA2').value);
    localStorage.setItem('golsB1', document.getElementById('golsB1').value);
    localStorage.setItem('golsB2', document.getElementById('golsB2').value);
    localStorage.setItem('golsC1', document.getElementById('golsC1').value);
    localStorage.setItem('golsC2', document.getElementById('golsC2').value);
    localStorage.setItem('golsD1', document.getElementById('golsD1').value);
    localStorage.setItem('golsD2', document.getElementById('golsD2').value);
    localStorage.setItem('golsE1', document.getElementById('golsE1').value);
    localStorage.setItem('golsE2', document.getElementById('golsE2').value);
    localStorage.setItem('golsF1', document.getElementById('golsF1').value);
    localStorage.setItem('golsF2', document.getElementById('golsF2').value);
    localStorage.setItem('golsG1', document.getElementById('golsG1').value);
    localStorage.setItem('golsG2', document.getElementById('golsG2').value);
    localStorage.setItem('golsH1', document.getElementById('golsH1').value);
    localStorage.setItem('golsH2', document.getElementById('golsH2').value);
    localStorage.setItem('golsO1', document.getElementById('golsO1').value);
    localStorage.setItem('golsO2', document.getElementById('golsO2').value);
    localStorage.setItem('golsO3', document.getElementById('golsO3').value);
    localStorage.setItem('golsO4', document.getElementById('golsO4').value);
    localStorage.setItem('golsO5', document.getElementById('golsO5').value);
    localStorage.setItem('golsO6', document.getElementById('golsO6').value);
    localStorage.setItem('golsO7', document.getElementById('golsO7').value);
    localStorage.setItem('golsO8', document.getElementById('golsO8').value);
    localStorage.setItem('golsQ1', document.getElementById('golsQ1').value);
    localStorage.setItem('golsQ2', document.getElementById('golsQ2').value);
    localStorage.setItem('golsQ3', document.getElementById('golsQ3').value);
    localStorage.setItem('golsQ4', document.getElementById('golsQ4').value);
    localStorage.setItem('golsS1', document.getElementById('golsS1').value);
    localStorage.setItem('golsS2', document.getElementById('golsS2').value);
    localStorage.setItem('penaltisA1', document.getElementById('penaltisA1').value);
    localStorage.setItem('penaltisA2', document.getElementById('penaltisA2').value);
    localStorage.setItem('penaltisB1', document.getElementById('penaltisB1').value);
    localStorage.setItem('penaltisB2', document.getElementById('penaltisB2').value);
    localStorage.setItem('penaltisC1', document.getElementById('penaltisC1').value);
    localStorage.setItem('penaltisC2', document.getElementById('penaltisC2').value);
    localStorage.setItem('penaltisD1', document.getElementById('penaltisD1').value);
    localStorage.setItem('penaltisD2', document.getElementById('penaltisD2').value);
    localStorage.setItem('penaltisE1', document.getElementById('penaltisE1').value);
    localStorage.setItem('penaltisE2', document.getElementById('penaltisE2').value);
    localStorage.setItem('penaltisF1', document.getElementById('penaltisF1').value);
    localStorage.setItem('penaltisF2', document.getElementById('penaltisF2').value);
    localStorage.setItem('penaltisG1', document.getElementById('penaltisG1').value);
    localStorage.setItem('penaltisG2', document.getElementById('penaltisG2').value);
    localStorage.setItem('penaltisH1', document.getElementById('penaltisH1').value);
    localStorage.setItem('penaltisH2', document.getElementById('penaltisH2').value);
    localStorage.setItem('penaltisO1', document.getElementById('penaltisO1').value);
    localStorage.setItem('penaltisO2', document.getElementById('penaltisO2').value);
    localStorage.setItem('penaltisO3', document.getElementById('penaltisO3').value);
    localStorage.setItem('penaltisO4', document.getElementById('penaltisO4').value);
    localStorage.setItem('penaltisO5', document.getElementById('penaltisO5').value);
    localStorage.setItem('penaltisO6', document.getElementById('penaltisO6').value);
    localStorage.setItem('penaltisO7', document.getElementById('penaltisO7').value);
    localStorage.setItem('penaltisO8', document.getElementById('penaltisO8').value);
    localStorage.setItem('penaltisQ1', document.getElementById('penaltisQ1').value);
    localStorage.setItem('penaltisQ2', document.getElementById('penaltisQ2').value);
    localStorage.setItem('penaltisQ3', document.getElementById('penaltisQ3').value);
    localStorage.setItem('penaltisQ4', document.getElementById('penaltisQ4').value);
    localStorage.setItem('penaltisS1', document.getElementById('penaltisS1').value);
    localStorage.setItem('penaltisS2', document.getElementById('penaltisS2').value);
    localStorage.setItem('O1', document.getElementById('O1').innerHTML = oitavas1);
    localStorage.setItem('bandeiraO1', bandeiraO1);
    localStorage.setItem('O2', document.getElementById('O2').innerHTML = oitavas2);
    localStorage.setItem('bandeiraO2', bandeiraO2);
    localStorage.setItem('O3', document.getElementById('O3').innerHTML = oitavas3);
    localStorage.setItem('bandeiraO3', bandeiraO3);
    localStorage.setItem('O4', document.getElementById('O4').innerHTML = oitavas4);
    localStorage.setItem('bandeiraO4', bandeiraO4);
    localStorage.setItem('O5', document.getElementById('O5').innerHTML = oitavas5);
    localStorage.setItem('bandeiraO5', bandeiraO5);
    localStorage.setItem('O6', document.getElementById('O6').innerHTML = oitavas6);
    localStorage.setItem('bandeiraO6', bandeiraO6);
    localStorage.setItem('O7', document.getElementById('O7').innerHTML = oitavas7);
    localStorage.setItem('bandeiraO7', bandeiraO7);
    localStorage.setItem('O8', document.getElementById('O8').innerHTML = oitavas8);
    localStorage.setItem('bandeiraO8', bandeiraO8);
    localStorage.setItem('Q1', document.getElementById('Q1').innerHTML = quartas1);
    localStorage.setItem('bandeiraQ1', bandeiraQ1);
    localStorage.setItem('Q2', document.getElementById('Q2').innerHTML = quartas2);
    localStorage.setItem('bandeiraQ2', bandeiraQ2);
    localStorage.setItem('Q3', document.getElementById('Q3').innerHTML = quartas3);
    localStorage.setItem('bandeiraQ3', bandeiraQ3);
    localStorage.setItem('Q4', document.getElementById('Q4').innerHTML = quartas4);
    localStorage.setItem('bandeiraQ4', bandeiraQ4);
    localStorage.setItem('S1', document.getElementById('S1').innerHTML = semi1);
    localStorage.setItem('bandeiraS1', bandeiraS1);
    localStorage.setItem('S2', document.getElementById('S2').innerHTML = semi2);
    localStorage.setItem('bandeiraS2', bandeiraS2);
    localStorage.setItem('T1', document.getElementById('T1').innerHTML = perdedor1);
    localStorage.setItem('bandeiraT1', bandeiraPerdedor1);
    localStorage.setItem('T2', document.getElementById('T2').innerHTML = perdedor2);
    localStorage.setItem('bandeiraT2', bandeiraPerdedor2);
    localStorage.setItem('golsT1', document.getElementById('golsT1').value);
    localStorage.setItem('golsT2', document.getElementById('golsT2').value);
    localStorage.setItem('penaltisT1', document.getElementById('penaltisT1').value);
    localStorage.setItem('penaltisT2', document.getElementById('penaltisT2').value);
    localStorage.setItem('Campeao', document.getElementById('Campeao').innerHTML = campeao);
    localStorage.setItem('bandeiraCampeao1', bandeiraCampeao);
    localStorage.setItem('bandeiraCampeao2', bandeiraCampeao);
    dataGet();
}; // Função para salvar a segunda fase da copa (as eliminatórias)
