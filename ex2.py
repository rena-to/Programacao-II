inventario = []

def adicionar_produto(inventario):
    nome = input("qual o nome do produto: ")
    valor  = float(input("qual o valor do produto: "))

    inventario.append({nome : valor})
    
    print(f"produto {nome} adicionado com sucesso")

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
    acao = input("1. Adicionar\n2. Listar Produtos\n3. Sair\n--> ")
    
    if acao == "1":
        adicionar_produto(inventario)
            
    elif acao == "2":
        listar_produto(inventario)

    elif acao == "3":
        break
