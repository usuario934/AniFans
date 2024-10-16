

// | -----------------------------------------------------------------------------------------------------------////////
// |
// | Variaveis globais
// |
// | -----------------------------------------------------------------------------------------------------------////////

const [
    arrows,
    item_slide,
    events,
    body,
    labels,
    itens,
    cards,
    container_category
] = [
    document.querySelectorAll(".arrows"),
    document.querySelectorAll(".item-slide"),
    document.querySelectorAll("#cards_events").children,
    document.querySelector('body'),
    document.querySelectorAll('.lb'),
    document.querySelectorAll('.item-lista'),
    document.querySelectorAll('.cards'),
    document.querySelectorAll('div[data-type="container_category"]')
]


// | -----------------------------------------------------------------------------------------------------------////////
// |
// | Codigo MAIN
// |
// | -----------------------------------------------------------------------------------------------------------////////

const doc = body.childNodes[1]

switch(doc.id) {
    case 'content_intro':
        actionArrows()
        recomendados()
        hidderArrows()
        InsertValueInEmpty()
        break

    case 'content_folder':
        hidderArrows()
        break

    case 'content_catalogy':
        ContainerSelection('.options', '.title[data-type="selected"]')
        break
}

// | -----------------------------------------------------------------------------------------------------------////////
// |
// | Funções
// |
// | -----------------------------------------------------------------------------------------------------------////////


function actionArrows() {

    arrows.forEach(elem => {
        const elem_ul = elem.parentElement.children[1]


        elem.addEventListener('click', () => {
            if(elem.getAttribute("data-arrow") == 'prev') {
                elem_ul.scrollBy(-10, 0)
            }else {
                elem_ul.scrollBy(10, 0)
            }
        })
    })
}


// ---- Sorteando cards que vão ser exibidos ------------

function sorteados() {
    let lista_escolhidos = []

    for(i = 0; i < 5; i++) {
        let numb = Math.floor(Math.random() * 30)
        while(lista_escolhidos.indexOf(numb) != -1) {
            numb = Math.floor(Math.random() * 30)
        }
        lista_escolhidos.push(numb)
    }

    return lista_escolhidos
}



// ---- Exibir cards Recomendados ----------------------

function recomendados() {

    labels[0].style.background = '#EB7910'

    const random = sorteados()
    itens.forEach(elem => {
        elem.classList.add('d-none')
    })

    // itens[random[0]].classList.remove('d-none')
    itens[0].classList.remove('d-none')



    labels.forEach(elem => {
        const pos = elem.getAttribute('for')[1]
        const index = random[pos]


        elem.addEventListener('click', () => {
            labels.forEach(itens => {
                itens.style.background = '#222222'
            })

            itens.forEach(elem => {
                elem.classList.add('d-none')
                elem.style.transform = "translateX(20px)"
                elem.style.opacity = "0"
            })

            itens[pos].classList.remove('d-none')
            fadeOut(itens[pos])

            elem.style.background = '#EB7910'
            elem.style.transition = '.4s all ease-in-out'
        })
    })

}

// ---- Aplicação do estilo dos cards ------------------

function fadeOut(elem) {
    setTimeout(() => {
        elem.style.transform = "translateX(0px)"
        elem.style.transition = "1s all"
        elem.style.opacity = "1"
    }, 100)
}


function hidderArrows() {

    arrows.forEach(element => {
        const parent_element = element.parentNode.children[1].children

        if(parent_element.length == 0 || parent_element.length <= 4) {

            element.classList.add('d-none')
            element.classList.remove('arrows')

        }

    })
}


// ---- Inserindo um texto padrão onde uma lista do cataologo não tiver filhos ------------------

function InsertValueInEmpty() {

    container_category.forEach(element => {
        const container = element.childNodes[3]

        const obj = {
            type: 'div',
            attr: [
                ['class', ['title']],
                ['data-type', ['messege_empty']]
            ],
            parent: container,
            text: 'Nenhum conteudo inserido!'
        }

        if(container.children.length == 0) {
            CreateElement(obj)
        }

    })

}


// ---- Função responsavel pela criação de um elemento HTML usando um dicionario ------------------

function CreateElement(obj) {

    if(typeof(obj) == "object") {
        const element_create = document.createElement(obj.type)
        element_create.innerHTML = obj.text

        obj.attr.forEach(([key, value]) => {
            element_create.setAttribute(key, value)
        })
        obj.parent.appendChild(element_create)
    }

}


// ---- Expandira uma aba de lista de conteudos ------------------

function ContainerSelection(target, element) {
    const [extend, container] = [document.querySelector(target), document.querySelector(element)]
    const parent = extend.parentNode
    const [icons_arrow, itens]= [convertObjectInArray(parent.childNodes), convertObjectInArray(extend.children)]

    extend.classList.add('toggle-height')

    parent.addEventListener('click', () => {

        extend.classList.toggle('toggle-height')
        icons_arrow.find((element) => { return element.classList.contains('icon') }).classList.toggle('toggle-rotation')

    })

    parent.addEventListener('mouseleave', () => {
        extend.classList.add('toggle-height')
        icons_arrow.find((element) => { return element.classList.contains('icon') }).classList.remove('toggle-rotation')
    })

    itens.forEach(element => {
        element.onclick = () => {
            container.innerHTML = element.textContent
        } 
    })
}


// ---- Função responsavel por converter HTMLObjects em arrays ------------------

function convertObjectInArray(target) {

    const [array, new_array] = [Array.from(target), []] 
    array.find((element) => { element.classList ? new_array.push(element) : '' })

    return new_array
}
