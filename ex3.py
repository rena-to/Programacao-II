
inventario = []

def adicionar_produto(inventario):
    nome = input("qual o nome do produto: ").lower().capitalize()
    valor  = float(input("qual o valor do produto: "))

    inventario.append({nome : valor})
    
    print(f"produto {nome} adicionado com sucesso\n")

def atualizar_produto(inventario):

    if len(inventario) == 0:
        print("não há produtos registrados\n")
        return True
    
    nome = input("qual o nome do produto para atualizar: ").lower().capitalize()

    for dic in inventario:
        if nome in dic.keys():
            valor  = float(input("insira o novo valor do produto: "))
            dic[nome] = valor
            print(f"produto {nome} atualizado com sucesso\n")
            return True
        
    return False

def listar_produto(inventario):

    if len(inventario) == 0:
        print("não há produtos registrados\n")
        return
    
    contador = 1
    print("\nLista de produtos:")
    for dic in inventario:
        for key, value in dic.items():
            print(f"{contador}. {key} - R${str(value).replace(".", ",")}")
        contador += 1

    print() 

while True:
    acao = input("1. Adicionar\n2. Atualizar\n3. Listar Produtos\n4. Sair\n--> ")
    
    if acao == "1":
        adicionar_produto(inventario)

    elif acao == "2":
        confirm = atualizar_produto(inventario)

        if not confirm:
            print("produto não encontrado\n")
            
    elif acao == "3":
        listar_produto(inventario)

    elif acao == "4":
        break

print("programa encerrado")

