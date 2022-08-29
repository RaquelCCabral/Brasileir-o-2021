from turtle import color
import pandas as pd
import matplotlib.pyplot as plt

tabela = pd.read_excel(r'C:\Users\Raquel\Python\Brasileirão 2021.xlsx') # Leio o arquivo excel (nos comentários)

lista_vitoria = []
lista_derrota = []

for i in range(len(tabela)): # Crio uma lista com vencedores e outra com perdedores das partidas, os empates deixam espaços em branco
    if tabela['Gols Casa'][i] > tabela['Gols Fora'][i]:
        lista_vitoria.append(tabela['Mandante'][i])
        lista_derrota.append(tabela['Visitante'][i])
    elif tabela ['Gols Casa'][i] < tabela['Gols Fora'][i]:
        lista_vitoria.append(tabela['Visitante'][i])
        lista_derrota.append(tabela['Mandante'][i])
    else:
        lista_vitoria.append('')
        lista_derrota.append('')

resultado = pd.DataFrame(zip(lista_vitoria, lista_derrota), columns = ['Vitória', 'Derrota']) # Transformo as listas em séries

vitorias = (resultado.groupby(['Vitória']).size()).drop(['']) # Somatizo as vitórias por time (quantas vezes o time aparece na coluna vitórias)
derrotas = (resultado.groupby(['Derrota']).size()).drop(['']) # Somatizo as derrotas por time (quantas vezes o time aparece na coluna derrotas)
jogos = tabela.groupby(['Mandante']).size() + tabela.groupby(['Visitante']).size() # Somatizo a quantidade de jogos por time
empates = jogos - (vitorias + derrotas) # Calculo o total de empates por time
pontos = 3 * vitorias + empates # Calculo o total de pontos por time
gp = pd.DataFrame(columns = ['Time', 'GP']) # Gero dataframes de gols feitos por time
gc = pd.DataFrame(columns = ['Time', 'GC']) # Gero dataframes de gols recebidos por time
sg = pd.DataFrame(columns = ['Time', 'SG']) # Gero dataframes de saldo de gols por time
time = vitorias.reset_index()['Vitória'] # Transformo o tópico times de index para uma das colunas para poder usar como tópico futuramente pra agrupá-las

for i in range(len(time)): # Preencho os dataframes GP e GC
    gm = 0
    gv = 0
    for j in range(len(tabela)):
        if tabela['Mandante'][j] == time[i]:
            gm += tabela['Gols Casa'][j] # Somo gols feitos em casa por cada time
        elif tabela['Visitante'][j] == time[i]: 
            gm += tabela['Gols Fora'][j] # Somo gols feitos fora por cada time
    gp.loc[i] = [time[i], gm]
    for l in range(len(tabela)):
        if tabela['Mandante'][l] == time[i]:
            gv += tabela['Gols Fora'][l] # Somo gols recebidos fora por cada time
        elif tabela['Visitante'][l] == time[i]:
            gv += tabela['Gols Casa'][l] # Somo gols recebidos em casa por cada time
    gc.loc[i] = [time[i], gv]
    sg.loc[i] = [time[i], gm - gv] # Preencho dataframe de saldo de gols a partir dos dataframes de GP e GC

c = pd.DataFrame(zip(time, pontos, jogos, vitorias, empates, derrotas), columns = ['Time', 'P', 'J', 'V', 'E', 'D']) # Agrupo as séries entre si
classif = pd.merge(pd.merge(pd.merge(c, gp, how = 'inner', on = 'Time'), gc, how = 'inner', on = 'Time'), sg, how = 'inner', on = 'Time') # Agrupo as séries com os dataframes
classificacao = classif.sort_values(by = ['P', 'V', 'SG', 'GP', 'GC'], ascending = False) # Ordeno a tabela de classificação

classificacao.to_excel(r'C:\Users\Raquel\Python\Classificação.xlsx', index = False)

def colorir_coluna (n, m, cor, col): # Faço uma função simples so pra colorir uma coluna inteira (n = colunas, m = linhas, cor = string da cor que eu quero, col = numero da coluna que eu quero colorir)
    l = ['w']*n
    l[col-1] = cor
    matriz = [l]*m
    return matriz

fig, ax = plt.subplots(1, 1, figsize = (10, 5)) # Plotando a tabela de classificação
ax.table(cellText = classificacao.values, colLabels = classificacao.columns, loc = 'center', cellColours = colorir_coluna(9, 20, 'green', 1), colColours = ['yellow']*9)
plt.show()

df = pd.DataFrame(columns=['Time', 'Vitórias como Mandante', 'Derrotas como Mandante', 'Vitórias como Visitante', 'Derrotas como Visitante']) # Criando um novo dataframe

for i in range(len(time)): # Somatizo vitórias/derrotas de cada time como mandante/visitante
    vitoria = resultado['Vitória'] == time[i]
    mandante_da_vitoria = tabela['Mandante'][vitoria]
    visitante_da_vitoria = tabela['Visitante'][vitoria]
    derrota = resultado['Derrota'] == time[i]
    mandante_da_derrota = tabela['Mandante'][derrota]
    visitante_da_derrota = tabela['Visitante'][derrota]
    a = 0
    k = 0
    while k <=len(tabela):
        try:
            if mandante_da_vitoria[k] == time[i]:
                a += 1    
        except KeyError: None
        k += 1
    b = 0
    k = 0
    while k <=len(tabela):
        try:
            if mandante_da_derrota[k] == time[i]:
                b += 1    
        except KeyError: None
        k += 1
    c = 0
    k = 0
    while k <=len(tabela):
        try:
            if visitante_da_vitoria[k] == time[i]:
                c += 1    
        except KeyError: None
        k += 1
    d = 0
    k = 0
    while k <=len(tabela):
        try:
            if visitante_da_derrota[k] == time[i]:
                d += 1    
        except KeyError: None
        k += 1
    df.loc[i] = [time[i], a, b, c, d] # Preencho a tabela criada

melhores_mandantes = df.nlargest(7, ['Vitórias como Mandante']) # Seleciono os 7 melhores mandantes (possuem mais vitórias em casa)
piores_mandantes = df.nlargest(7, ['Derrotas como Mandante']) # Seleciono os 7 piores mandantes (possuem mais derrotas em casa)
melhores_visitantes = df.nlargest(7, ['Vitórias como Visitante']) # Seleciono os 7 melhores visitante (possuem mais vitórias fora)
piores_visitantes = df.nlargest(7, ['Derrotas como Visitante']) # Seleciono os 7 piores visitantes (possuem mais derrotas fora)

fig, axes = plt.subplots(2, 2) # Plotando os 4 gráficos, avaliando os melhores/piores mandantes/visitantes
melhores_mandantes.plot(x = 'Time', y = ['Vitórias como Mandante'], kind = 'bar', ax= axes[0, 0], color = 'blue', title = 'Melhores Mandantes')
piores_mandantes.plot(x = 'Time', y = ['Derrotas como Mandante'], kind = 'bar', ax= axes[0, 1], color = 'red', title = 'Piores Mandantes')
melhores_visitantes.plot(x = 'Time', y = ['Vitórias como Visitante'], kind = 'bar', ax= axes[1, 0], color = 'yellow', title = 'Melhores Visitantes')
piores_visitantes.plot(x = 'Time', y = ['Derrotas como Visitante'], kind = 'bar', ax= axes[1, 1], color = 'green', title = 'Piores Visitantes')
fig.tight_layout()
plt.show()
