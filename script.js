const arrProdutos = [
    {
        name: "Monitor DELL",
        image: "imgs/monitor_dell_curvo.png",
        id: 1,
        category: "Monitores",
        descricao: "Monitor gamer curvo Full HD de 27, com taxa de atualização de 144Hz, para jogabilidade contínua e imersiva.",
        valor: 890,
        adicionar: "Adicionar ao carrinho"
    },
    {
        name: "Teclado Gamer",
        image: "imgs/teclado_preto.png",
        id: 2,
        category: "Teclados",
        descricao: "Teclado gamer mecanico com switch outemu blue, RGB",
        valor: 310,
        adicionar: "Adicionar ao carrinho"
    },
    {
        name: "Monitor Gamer",
        image: "imgs/monitor_aoc.png",
        id: 3,
        category: "Monitores",
        descricao: "Monitor gamer HD de 24 com taxa de atualização de 144 Hz, paramelhor desempenho",
        valor: 990,
        adicionar: "Adicionar ao carrinho"
    },
    {
        name: "Mouse Redragon",
        image: "imgs/mouse_preto.png",
        id: 4,
        category: "Mouse",
        descricao: "Chroma RGB, 12400DPI, 7 Botões, Preto",
        valor: 250,
        adicionar: "Adicionar ao carrinho"
    },
    {
        name: "Mouse Gamer",
        image: "imgs/mouse_branco.png",
        id: 5,
        category: "Mouse",
        descricao: "Monitor gamer com 10000 de DPI, RGB, branco",
        valor: 200,
        adicionar: "Adicionar ao carrinho"
    },
    {
        name: "Teclado Gamer",
        image: "imgs/teclado_kumara.png",
        category: "Teclados",
        id: 6,
        descricao: "Teclado gamer redragon kumara, preto, RGB",
        valor: 390,
        adicionar: "Adicionar ao carrinho"
    },
    {
        name: "Mouse Pad",
        image: "imgs/mouse_pad_preto.png",
        category: "Mouse Pad",
        id: 7,
        descricao: "Mouse pad preto, 50cm por 30cm speed para jogos",
        valor: 60,
        adicionar: "Adicionar ao carrinho"
    },
    {
        name: "Mouse Pad",
        image: "imgs/mouse_pad_rgb.png",
        category: "Mouse Pad",
        id: 8,
        descricao: "Mouse pad preto, RGB, 90cm por 40cm, speed para jogos",
        valor: 120,
        adicionar: "Adicionar ao carrinho"
    }
]

//FUNÇÃO PARA ADD TODOS PRODUTOS UTILIZANDO DOM
let section_produtos = document.querySelector(".produtos")
function addProdutos(produtos) {
    for (let i = 0; i < produtos.length; i++) {

        let card = document.createElement("section")
        card.className = "card"

        let imagem = document.createElement("div")
        imagem.className = "imagem"

        let figure = document.createElement("figure")
        let img = document.createElement("img")
        img.className = "imagem-produto"

        let categoria = document.createElement("p")
        categoria.className = "categoria"

        let nome_produto = document.createElement("h2")
        nome_produto.className = "nome-produto"

        let descricao = document.createElement("p")
        descricao.className = "descricao-produto"

        let valor = document.createElement("h3")
        valor.className = "valor-produto"

        const button_add = document.createElement("button")
        button_add.className = "button-adicionar-carrinho"

        img.src = produtos[i].image
        categoria.innerText = produtos[i].category
        nome_produto.innerText = produtos[i].name
        descricao.innerText = produtos[i].descricao
        valor.innerText = `R$ ${produtos[i].valor},00`
        button_add.innerText = produtos[i].adicionar
        button_add.id = produtos[i].id

        figure.appendChild(img)
        imagem.appendChild(figure)
        card.appendChild(imagem)
        card.appendChild(categoria)
        card.appendChild(nome_produto)
        card.appendChild(descricao)
        card.appendChild(valor)
        card.appendChild(button_add)
        section_produtos.appendChild(card)

    }
}
addProdutos(arrProdutos)


//FUNÇÃO PARA ADD E REMOVE ITENS AO CARRINHO
function elementosCarrinho(elemento) {

    let produto_dentro_carrinho = document.createElement("div")
    produto_dentro_carrinho.className = "produto-dentro-carrinho"

    let figure = document.createElement("figure")
    figure.className = 'figure-produto-carrinho'

    let img = document.createElement("img")
    img.className = "imagem-produto-carrinho"
    img.src = elemento.image

    let descricao_produto_carrinho = document.createElement('div')
    descricao_produto_carrinho.className = 'descricao-produto-carrinho'

    let nome_dentro_carrinho = document.createElement("h6")
    nome_dentro_carrinho.className = 'nome-dentro-carrinho'
    nome_dentro_carrinho.innerText = elemento.name

    let valor_produto_carrinho = document.createElement('p')
    valor_produto_carrinho.className = 'valor-produto-carrinho'
    valor_produto_carrinho.innerText = `R$ ${elemento.valor},00`

    let button_remove = document.createElement("button")
    button_remove.className = 'button-remover-do-carrinho'
    button_remove.id = elemento.id
    button_remove.innerText = "Remover"
    button_remove.addEventListener('click', identificarCarrinho)
    
    

    figure.appendChild(img)
    produto_dentro_carrinho.appendChild(figure)
    produto_dentro_carrinho.appendChild(descricao_produto_carrinho)
    descricao_produto_carrinho.appendChild(nome_dentro_carrinho)
    descricao_produto_carrinho.appendChild(valor_produto_carrinho)
    descricao_produto_carrinho.appendChild(button_remove)

    let carrinho = document.querySelector('.carrinho')
    carrinho.appendChild(produto_dentro_carrinho)
}
let carrinho = document.querySelectorAll('.carrinho')



function identificar(event) {
    let id = event.target.id
    elementosCarrinho(pegandoProduto(id))
}
let button_add = document.querySelectorAll('.button-adicionar-carrinho')
for (let i = 0; i < button_add.length; i++) {
    button_add[i].addEventListener('click', identificar)
}

let count = []
let valor = document.querySelector('.valor')
let quantidadeTotal = document.querySelector('.quantidade')
function pegandoProduto(id) {
    let produto
    for (let i = 0; i < arrProdutos.length; i++) {
        if (arrProdutos[i].id == id) {
            produto = arrProdutos[i]
            count.push(arrProdutos[i].valor)
        }
    }
    let total = count.reduce((a, b) => a + b, 0)
    let quantidade = count.length
    
    valor.innerText = `R$ ${total},00`
    quantidadeTotal.innerText = quantidade
    return produto
}
function identificarCarrinho(e){
    let id_carrinho = e.target.closest('.produto-dentro-carrinho')
    id_carrinho.remove()
}