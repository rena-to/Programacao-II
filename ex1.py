inventario = []

def adicionar_produto(inventario):
    nome = input("qual o nome do produto: ")
    valor  = float(input("qual o valor do produto: "))

    inventario.append({"nome" : nome,
                       "valor" : valor}
                      )
    
    print(f"produto {nome} adicionado com sucesso")

while True:
    adicionar_produto(inventario)

    if input("sair? (s/n)") == "s":
        break

for dic in inventario:
    print(dic)