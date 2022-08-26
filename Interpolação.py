import sympy
from sympy import *
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

x = sympy.Symbol('x')

def fx(funcao, valores_x): 
    # Recebe uma função de x e uma lista de valores de x e retorna uma lista com resultados da função para cada valor de x
    resultado = []
    for i in range (len(valores_x)):
        resultado.append(funcao.subs({x:valores_x[i]})) # Para cada valor de x retorno o resultado da função para esse valor
    return resultado

def interpolacao_linear(ponto1, ponto2): 
    # É a linha entre dois pontos dados: (xa, ya) e (xb, yb)
    # Recebe dois pontos e resolve o sistema linear para descobrir os valores de a1 e a0
    a0,a1 = sympy.symbols('a0 a1')
    p0 = sympy.Eq(a1*ponto1[0]  + a0, ponto1[1]) # a1*xa + a0 = ya
    p1 = sympy.Eq(a1*ponto2[0]  + a0, ponto2[1]) # a1*xb + a0 = yb
    resultado = sympy.solve((p0, p1), (a1, a0)) # Retorna os valores de a1 e a0
    return print('P(x) = ', resultado[a1]*x + resultado[a0]) # P(x) = a1*x + a0

def interpolacao_quadratica(ponto1, ponto2, ponto3): 
    # Pretendemos encontrar um polinômio de segundo grau a partir de três pontos dados: (xa, ya), (xb, yb) e (xc, yc)
    # Recebe três pontos e resolve o sistema linear para descobrir os valores de a2, a1 e a0
    a0,a1,a2 = sympy.symbols('a0 a1 a2')
    p0 = sympy.Eq(a2*(ponto1[0])**2  + a1*ponto1[0] + a0, ponto1[1]) # a2*xa² + a1*xa = ya
    p1 = sympy.Eq(a2*(ponto2[0])**2  + a1*ponto2[0] + a0, ponto2[1]) # a2*xb² + a1*xb = yb
    p2 = sympy.Eq(a2*(ponto3[0])**2  + a1*ponto3[0] + a0, ponto3[1]) # a2*xc² + a1*xc = yc
    resultado = sympy.solve((p0, p1, p2), (a2, a1, a0)) # Retorna os valores de a2, a1 e a0
    return print('P(x) = ', resultado[a2]*x**2 + resultado[a1]*x + resultado[a0]) # P(x) = a2*x² + a1*x + a0

def interpolacao_lagrange(listax, listafx):
    # Recebe duas listas (uma com valores de x e outra com valores da função em valores de x)
    # Ln,k(x) = [(x - x0)(x - x1)...(x - xn)]/[(xk - x0)(xk - x1)...(xk - xn)] para cada k = 0, 1, ..., n
    L = []
    Lnum = []
    Lden = []
    i = 0
    # Separo os numeradores dos denominadores e faço duas listas para dps do produtorio fazer a divisão
    while i < len(listax):
        j = 0
        numeradores = []
        denominadores = []
        while j < len(listax):
            if j == i:
                numerador = 1 # Para eliminar o (x - xi) do numerador de Li
                denominador = 1 # Para eliminar o (xi - xi) do numerador e não dar erro de divisão por zero
            else:
                numerador = x - listax[j] # (x - xj)
                denominador = listax[i] - listax[j] # (xi - xj)
            numeradores.append(numerador)
            denominadores.append(denominador)
            j += 1
        Lnum.append(sympy.expand(prod(numeradores))) # Produtório de numeradores de cada Li
        Lden.append(prod(denominadores)) # Produtório de denominadores de cada Li
        i+= 1

    for n,d in zip(Lnum, Lden):
        L.append(n/d) # Lista de valores de L

    resultado = sum(np.multiply(listafx, L)) # P(x) = f(x0)L0(x) + f(x1)L1(x) + ... + f(xn)Ln(x)

    graf = plot(resultado, x, show = 'False') # Cria o gráfico do polinômio encontrado
    data = graf[0].get_points()
    fig, ax = plt.subplots()
    ax.plot(*data) # Plota a linha azul do gráfico do polinômio
    ax.scatter(listax, listafx, color = 'red') # Plota os pontos dados em vermelho
    plt.xlim(min(listax), max(listax)) # Limito a escala horizontal pra mostrar a parte que interessa
    plt.ylim(min(listafx), max(listafx)) # Limito a escala vertical pra mostrar a parte que interessa

    return print('P(x) = ', resultado), plt.show()

def interpolacao_newton(listax, listafx, n = None, ponto = None):

    # Recebe duas listas (uma com valores de x e outra com valores da função em valores de x)
    # Recebe também o grau do polinômio (n), opcional
    # Caso receba o grau, pode receber também o ponto no qual interpola os valores mais próximos, em torno desse ponto

    # Faz um dataframe com as chamadas diferenças divididas (colunas de xi, f(xi), f[xi, xi+1], f[xi, xi+1, xi+2], ...), onde:
    # f[xi] = f(xi)
    # f[xi, xi+1] = [f(xi+1) - f(xi)]/[(xi+1)- xi]
    # f[xi, xi+1, xi+2] = [f[xi+1, xi+2] - f[xi, xi+1]]/[(xi+2)- xi] e assim sucessivamente...

    df = pd.DataFrame()
    s = 'Ordem 0' # Variável string criada a fim de poder alterar e criar futuramente quantas colunas eu quiser dependendo da ordem
    df['x'] = listax # coluna de valores xi
    df[s] = listafx # coluna de valores f(xi)
    j = 0
    while j < (len(df[s])-1):
        i = 0
        ordem = []
        num = int(s[len(s)-1]) + 1 # Adicionando 1 a cada volta no loop para alterar pra ordem seguinte
        while i < (len(df[s]) - 1):
            try:
                elemento = (df[s][i+1] - df[s][i])/(df['x'][i+num] - df['x'][i]) # Cálculo citado acima das diferenças divididas
                ordem.append(elemento) # Lista de elementos resultantes para criar uma nova coluna
            except KeyError: None
            i += 1
        while len(ordem) < len(df):
            ordem.append(None) # Como dataframe é necessário mesmo número de linhas na coluna e as diferenças divididas resultam numa espécie de escada, coloco o None para "compensar" o vazio
        s = s.replace(s[len(s) - 1], str(num)) # Altero o nome da string inicial 'Ordem i' para 'Ordem i + 1'
        df[s] = ordem # Crio a nova coluna com novo nome e elementos resultantes
        j += 1
    f = list(df.loc[0])[1:] # Separo a linha necessária com os valores de f(x0), f[x0, x1], ...
    xi = [1] # Já crio com elemento 1 para fazer o produtório com os elementos de f 
    P = []
    for k in range(len(df)):
        xi.append((x - df['x'][k])) # Preencho a lista xi com elementos (x - xi)
    if n == None: # Retorno o polinômio para casos em que não haja uma ordem específica e/ou ponto específico
        for p in range(len(f)): P.append(f[p]*prod(xi[:p+1])) # Pn(x) = f(x0) + f[x0, x1](x-x0) + ... + f[x0, ..., xn](x-x0)...(x-x(n-1))
    elif n != None and ponto == None: # Retorno o polinômio da ordem n dada mas sem ponto específico
        xn = xi[:(n+1)]
        for p in range(len(f)): P.append(f[p]*prod(xn[:p+1])) # Pn(x) = f(x0) + f[x0, x1](x-x0) + ... + f[x0, ..., xn](x-x0)...(x-x(n-1))
    else: # Retorno o polinômio da ordem n dada e em torno do ponto dado
        diferenca = [] # Crio a lista com o módulo da diferença entre o ponto dado e os pontos de x para identificar os mais próximos
        for i in range(len(listax)): diferenca.append(abs(round((listax[i] - ponto), (len(str(ponto))- 2))))
        d = diferenca.copy() # Cópia para ajudar na manipulação sem afetar a original lista de diferenças
        menores = []
        for i in range(n + 1): # Seleciona os (n+1) menores valores da lista de diferenças (mais próximos do ponto dado)
            menor = min(d)
            d.remove(menor)
            menores.append(menor)
        indice = diferenca.index(menores[0]) # Variável para localizar a posição dos menores valores na lista de diferenças
        d = []
        for i in range(len(menores)):
            if diferenca.index(menores[i]) < indice:
                indice = diferenca.index(menores[i])
            d.append(diferenca.index(menores[i])) # Lista dos índices de menores valores da lista de diferenças
        d = sorted(d) # Ordem crescente para facilitar o cálculo
        xj = [1] # Já crio com elemento 1 para fazer o produtório com os elementos de f 
        for i in range(len(menores)):
            xj.append(x - df['x'][d[i]]) # Preencho a lista xi com elementos (x - xi)
        f = list(df.loc[indice])[1:(n+2)] # Separo a linha necessária com os novos valores de f(x0), f[x0, x1], ...
        for p in range(len(f)): P.append(f[p]*prod(xj[:p+1])) # Pn(x) = f(x0) + f[x0, x1](x-x0) + ... + f[x0, ..., xn](x-x0)...(x-x(n-1))
        resultado = sum(P).subs(x, ponto) # Substitui x pelo valor do ponto dado
        print('P(',ponto,') = ', resultado)

    graf = plot(sum(P), x, show = 'False') # Cria o gráfico do polinômio encontrado
    data = graf[0].get_points()
    fig, ax = plt.subplots()
    ax.plot(*data) # Plota a linha azul do gráfico do polinômio
    ax.scatter(listax, listafx, color = 'red') # Plota os pontos dados em vermelho
    plt.xlim(min(listax), max(listax)) # Limito a escala horizontal pra mostrar a parte que interessa
    plt.ylim(min(listafx), max(listafx)) # Limito a escala vertical pra mostrar a parte que interessa

    return print('\nP(x) = ',sum(P), '\n\nP(x) = ', sympy.expand(sum(P))), plt.show() 