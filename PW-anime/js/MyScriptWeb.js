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
        recomendados(itens, labels)
        hidderArrows(4)
        InsertValueInEmpty()
        ReduxText()
        break

    case 'content_folder':
        actionArrows()
        hidderArrows(7)
        break

    case 'content_catalogy':
        ContainerSelection('.options', '.title[data-type="selected"]', '.icon[data-type="icon_catalogy"]')
        break

    case 'content_register':
        ContainerSelection('.options', '.title[data-type="selected"]', '.icon[data-type="icon_selection"]')
        break

    case 'content_read':
        ContainerSelection('#options', '.title[data-type="selected"]', '.icon[data-type="icon_read"]')
        break

    case 'content_comunidade':
        slider(itens, labels)
        break

    case 'content_reading_manga':
        actionArrows()
        hidderArrows(3)
        break
    
    case 'content_ItemShop':
        actionArrows()
        hidderArrows(3)
        break
}

Menubar()

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

function recomendados(list, lb) {

    const random = sorteados()

    slider(list, lb)

}

// ---- Aplicação Efeito Slider ----------------------

function slider(list_elements, lb) {

    HiddenElements(list_elements)

    lb.forEach(elem => {

        const position = elem.getAttribute('for')[1]
        
        elem.addEventListener('click', () => {
            lb.forEach(label => {
                label.classList.remove('label-active')
            })

            list_elements.forEach(model => {
                model.classList.remove('item-slide-static')
                model.classList.add('d-none')
            })

            list_elements[position].classList.remove('d-none')
            FadeIn(list_elements[position])

            elem.classList.add('label-active')
        })
    })
}

function HiddenElements(elements) {

    elements.forEach(elem => {
        elem.classList.add('d-none')
    })

    elements[0].classList.remove('d-none')
}

// ---- Aplicação do estilo dos cards ------------------

function FadeIn(target) {
    setTimeout(() => {
        target.classList.add('item-slide-static')
    }, 100)
}

// ---- Aplicação para esconder as Setas ------------------

function hidderArrows(n_element) {

    arrows.forEach(element => {
        const parent_element = element.parentNode.children[1].children

        if(parent_element.length == 0 || parent_element.length <= n_element) {

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
            text: 'Nenhum conteúdo no catalogo'
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

function ContainerSelection(target, element, icon) {
    const [
        extend, 
        container, 
        icons_arrow
    ] = [
        document.querySelector(target), 
        document.querySelector(element), 
        document.querySelector(icon)
    ]
    const [parent, itens] = [extend.parentNode, convertObjectInArray(extend.children)]

    extend.classList.add('toggle-height')

    parent.addEventListener('click', () => {

        extend.classList.toggle('toggle-height')
        icons_arrow.classList.toggle('toggle-rotation')

    })

    parent.addEventListener('mouseleave', () => {
        extend.classList.add('toggle-height')
        icons_arrow.classList.remove('toggle-rotation')
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


// ---- Função responsavel pala expansao do menu ------------------

function Menubar() {
    
    const elem = document.querySelector('.icon-menubar')
    const navbar = document.querySelector('.menu-bar')
    const container_lista = document.querySelector('.list-menu[data-type="down"')
    
    elem.onclick = () => { 
        container_lista.classList.toggle('menubar-extende')
        navbar.classList.toggle('toggle-bg')
    }

}

// ---- Função responsavel pala expansao do menu ------------------

function ReduxText() {

    const list_cards = document.querySelectorAll('.cards[data-type="anime"] .title-card')

    list_cards.forEach(elem => {

        if(elem.textContent.length >= 14) {
            let new_title = elem.textContent.slice(0, 14)

            elem.innerHTML = new_title + '...'

        }
    })

}

// ---- Função responsavel pala expansao do menu ------------------

function ScreenWidth() {
    const screen_width = window.innerWidth
    return screen_width
}