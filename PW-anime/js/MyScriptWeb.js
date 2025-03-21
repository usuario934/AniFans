// | -----------------------------------------------------------------------------------------------------------////////
// |
// | Dados Json
// |
// | -----------------------------------------------------------------------------------------------------------////////

const series = [
    {
        ordem:      0,
        nome_anime: "Sword Art Online",
        sigla:      "SAO",
        descricao:  "Em 2022, um jogo de realidade virtual chamado Sword Art Online acaba de ser lançado. Entre os jogadores está Kirito, um jovem que acredita ser capaz de zerá-lo sozinho. O único problema é muitos dos participantes não conseguiram sair do game, já que precisam vencer todas as fases do jogo.",
        categoria:  ["Aventura", "Ação", "Sci-fi"],
        img:        "img_SAO.jpg"
    },
    {
        ordem:      1,
        nome_anime: "Jujutsu no Kaisen",
        sigla:      "jjk",
        descricao:  "Itadori só precisava de um tempo a mais com seus amigos e com seu avô que estava no hospital. Para isso, ele decide se juntar ao clube de Ocultismo, onde muitas aventuras começam. Lá, os membros encontram um objeto amaldiçoado e retiram seu selo de proteção, o que atrai criaturas chamadas de 'maldições'.",
        categoria:  ["Sobrenatural", "Ação", "Shounen"],
        img:        "img_jjk.jpg"
    },
    {
        ordem:      2,
        nome_anime: "Kimetsu no Yaiba",
        sigla:      "KnY",
        descricao:  "A história gira ao entorno de Tanjirō Kamado, um garoto bondoso e inteligente que vive junto com sua mãe e seus irmãos, ganhando dinheiro vendendo carvão, assim como seu falecido pai. Certo dia, ao voltar para casa após ter ido a uma cidade vender carvão, Tanjiro descobre que toda sua família foi atacada por onis, sendo que uma de suas irmãs, Nezuko, é a única que sobreviveu ao ataque. Nezuko então passa a ser um oni, mas ela surpreendentemente ainda demonstra sinais de emoções e pensamentos humanos. Tanjirō decide então se tornar um caçador de onis, e com a ajuda de Nezuko, passa a sair em jornadas pelo Japão a fim de impedir que a mesma tragédia que afetou sua família aconteça com outras pessoas, enquanto que ele busca uma maneira de tornar Nezuko humana novamente.",
        categoria:  ["Sobrenatural", "Ação", "Shounen"],
        img:        "img_KnY.jpg"
    },
    {
        ordem:      3,
        nome_anime: "Shingeki no Kyojin",
        sigla:      "AoT",
        descricao:  "Os seres humanos se depararam com a repentina aparição dos Titãs no distrito de Shiganshina após mais de um século de paz. Eren Yeager, Mikasa Ackerman-sua irmã adotiva- e seu amigo de infância, Armin Arlert, testemunham o aparecimento de uma Titã de 60 metros, o Titã Colossal, e outro menor, o Titã Blindado, que abrem uma brecha na muralha Maria. Os Titãs, em seguida, invadem a cidade e fazem uma carnificina, incluindo a morte da mãe de Eren, que é devorada diante de seus olhos. Ele então decide se vingar e matar todos os Titãs, entrando para Divisão de Exploração.",
        categoria:  ["Aventura", "Ação", "Suspense"],
        img:        "img_AoT.jpg"
    },
    {
        ordem:      4,
        nome_anime: "Yamada-kun to 7-nin no majo",
        sigla:      "YW",
        descricao:  "Yamada-kun to Nananin no Majo conta a história de Ryu Yamada, um estudante conhecido como um delinquente em sua escola e estava muito cansado das aulas após um ano de frequentar a escola. Um dia, ele tropeça acidentalmente na escada e acaba caindo em cima de Urara Shiraishi, a aluna mais inteligente da escola. Yamada acorda e descobre que ele e Urara tem seus corpos trocados. Os dois tentam reverter a mudança e descobrir que em sua escola existe muitos misterios além desse.",
        categoria:  ["Shounen", "Comédia", "Romance"],
        img:        "img_YW.jpg"
    },
    {
        ordem:      5,
        nome_anime: "Tsugumomo",
        sigla:      "TM",
        descricao:  "O bem mais precioso de Kazuya Kagami no mundo é o obi deixado para ele por sua falecida mãe. O cheiro de flores de cerejeira infundidas nele o ajuda durante o dia – mas ele nunca esperava que ele salvasse sua vida, tornando-se uma linda garota vestida de quimono que se chama de 'espírito de artefato.",
        categoria:  ["Comédia", "Seinen", "Sobrenatural"],
        img:        "img_TM.jpg"
    },
    {
        ordem:      6,
        nome_anime: "God of High School",
        sigla:      "GOH",
        descricao:  "O bem mais precioso de Kazuya Kagami no mundo é o obi deixado para ele por sua falecida mãe. O cheiro de flores de cerejeira infundidas nele o ajuda durante o dia – mas ele nunca esperava que ele salvasse sua vida, tornando-se uma linda garota vestida de quimono que se chama de 'espírito de artefato.",
        categoria:  ["Comédia", "Seinen", "Sobrenatural"],
        img:        "img_GOH.jpg"
    },
    {
        ordem:      7,
        nome_anime: "Koutetsujou no Kabaneri",
        sigla:      "KF",
        descricao:  "Enquanto o mundo está no meio de uma revolução industrial, surge um monstro que não pode ser derrotado a menos que seu coração, que é protegido por uma camada de ferro, seja perfurado. Infectando seres humanos com sua mordida, o monstro pode criar criaturas agressivas e mortos-vivos conhecidos como Kabane.",
        categoria:  ["Suspense", "Fantasia", "Sobrenatural"],
        img:        "img_KF.jpg"
    },
    {
        ordem:      8,
        nome_anime: "Konosuba",
        sigla:      "KN",
        descricao:  "Após uma morte prematura e embaraçosa, Kazuma Satō, um adolescente japonês hikikomori e NEET, conhece uma deusa chamada Aqua, que se oferece para reencarnar-lo em um mundo paralelo com elementos de MMORPG controlado por um rei demoníaco, onde ele pode viver aventuras e batalha contra monstros.",
        categoria:  ["Comédia", "Aventura", "Fantasia"],
        img:        "img_KN.jpg"
    },
    {
        ordem:      9,
        nome_anime: "Tate no Yuusha no Nariagari",
        sigla:      "TnY",
        descricao:  "Naofumi Iwatani, um adolescente japonês, foi invocado por magos de um reino de um mundo paralelo junto com outros três rapazes para se tornarem heróis do mundo. Naofumi então é acusado de violentar a filha do rei, fazendo ser desertado do reino. Sozinho no mundo ele luta pela sobrevivencia e em seu caminho acaba conhecendo e formando um novo grupo.",
        categoria:  ["Ação", "Aventura", "Fantasia"],
        img:        "img_TnY.jpg"
    },
    {
        ordem:      10,
        nome_anime: "Tokyo Revengers",
        sigla:      "TR",
        descricao:  "Tokyo Revengers gira em torno de Takemichi Hanagaki, um homem de 26 anos mal sucedido na vida em todos os âmbitos, desde o profissional à relações amorosas. Um certo dia, ao assistir um jornal na TV, Takemichi descobre que sua primeira namorada havia sido morta num incidente que envolvia gangues de Tokyo.",
        categoria:  ["Ação", "Shounen", "Drama"],
        img:        "img_TR.jpg"
    },
    {
        ordem:      11,
        nome_anime: "Goblin Slayer",
        sigla:      "GS",
        descricao:  "Em um mundo de fantasia, aventureiros vêm de longe para se juntar a Guilda, a fim de concluir contratos para os postos de trabalho que estão disponíveis. Uma sacerdotisa inexperiente, ingressa em sua primeira aventura, mas se veem em perigo depois que seu primeiro contrato de aventureiros que envolve goblins da errado e quase todo seu grupo é dizimado pelos goblins. Depois que o resto do seu grupo é abatido ela é salva por um homem conhecido como Goblin Slayer, um aventureiro, cujo único propósito é a erradicação dos goblins.",
        categoria:  ["Ação", "Fantasia", "Aventura"],
        img:        "img_GS.jpg"
    },
    {
        ordem:      12,
        nome_anime: "Sono Bisque Doll Wa Koi Wo Suru",
        sigla:      "SBD",
        descricao:  "Wakana Gojo é um estudante do primeiro ano do ensino médio que sonha em se tornar uma artesão de bonecas hina . Um dia, durante seu primeiro semestre, sua popular colega de classe Marin Kitagawa o vê fazendo fantasias de boneca na sala de costura da escola. Marin, que há tempos queria fazer cosplay e observava a habilidade de costura de Wakana , pede que ele crie a fantasia de um personagem de um videogame que ela adora. Apesar do fato de Wakana não ter experiência em fazer uma fantasia em escala humana, ele se inspirou na tenacidade de Marin e concordou em fazer uma para ela.",
        categoria:  ["Romance", "Comédia", "Drama"],
        img:        "img_SBD.jpg"
    },
    {
        ordem:      13,
        nome_anime: "Boku no Hero Academia",
        sigla:      "BnH",
        descricao:  "A história segue Izuku Midoriya, um menino que nasceu sem individualidade em mundo que é normal tê-las, mas mesmo assim sonha em se tornar um super-herói. Após ajudar o maior herói do mundo, que fica fraco depois de um tempo por causa de um ferimento, a capturar um vilão, este compartilha os seus poderes, o One for All, com Izuku depois de reconhecer o seu valor e o ajuda a se matricular em uma escola para heróis em formação (a U.A).",
        categoria:  ["Ação", "Comédia", "Sci-fi"],
        img:        "img_BnH.jpg"
    },
    {
        ordem:      14,
        nome_anime: "Another",
        sigla:      "An",
        descricao:  "Tudo começa com uma historia contada pelos alunos do Colégio Yomita: há 26 anos, havia um aluno chamado Misaki que, desde o primeiro ano, era uma pessoa querida por todos ao seu redor, bom aluno e ótimo atleta. Mas no terceiro ano ele caiu na turma 3-3 e perdeu a vida em um acidente. Os colegas de Misaki, sem saberem como lidar com a morte repentina do amigo, decidiram “fingir que Misaki estava vivo”. Porém, no dia da formatura… na hora que a foto da turma 3-3 reunida foi revelada, Misaki estava presente. Foi aí que tudo começou.",
        categoria:  ["Suspense", "Sobrenatural", "Drama"],
        img:        "img_An.jpg"
    },
    {
        ordem:      15,
        nome_anime: "High School DxD",
        sigla:      "HDxD",
        descricao:  "A história gira em torno de Issei Hyoudou, um estudante do ensino médio que é morto por sua namorada em um encontro, onde é revelado que ela é um anjo caído. Porém mais tarde é revivido como um demônio por Rias Gremory para servi-la juntamente com seu clube.",
        categoria:  ["Comédia", "Ação", "Fantasia"],
        img:        "img_HDxD.jpg"
    },
    {
        ordem:      16,
        nome_anime: "Rosario + vampire",
        sigla:      "RV",
        descricao:  "Seguindo o gênero comédia e fantasia, Rosario + Vampire conta a história de Tsukune Aono, um garoto de 15 anos que vai estudar na Academia Yoka, uma escola exclusiva para monstros, vampiros e toda sorte de criaturas sobrenaturais. O problema é que, no colégio, é terminantemente proibida a entrada de seres humanos e, para piorar, a instituição segue uma regra bem radical: matar qualquer pessoa comum que colocar os pés lá.",
        categoria:  ["Comédia", "Slife of life", "Fantasia"],
        img:        "img_RV.jpg"
    },
    {
        ordem:      17,
        nome_anime: "Black rock Shooter",
        sigla:      "BRS",
        descricao:  "Kuroi Mato é uma estudante novata e no primeiro dia de aula, conhece Takanashi Yomi. Apesar de parecerem opostos extremos, uma amizade entre as duas floresce a medida que o tempo passa. Mas, a medida que o segundo ano no colégio vai passando, elas ficam em turmas diferentes e começam a crescer separadamente.",
        categoria:  ["Drama", "Ação", "Fantasia"],
        img:        "img_BRS.jpg"
    },
    {
        ordem:      18,
        nome_anime: "Mirai Nikki",
        sigla:      "MN",
        descricao:  "Yukiteru é um garoto de 14 anos que poderia ser considerado estranho. Com dificuldade para fazer amigos, para ele a vida não passa de um grande reality show, onde ele é mais um espectador. Tudo que ele vê, resolve anotar em seu celular, fazendo dele seu diário.",
        categoria:  ["Suspense", "Drama", "Ação"],
        img:        "img_MN.jpg"
    },
    {
        ordem:      19,
        nome_anime: "Kotoura",
        sigla:      "KT",
        descricao:  "Kotoura Hakura é uma garota que nasceu com a habilidade de ler mentes, porém, ao invés de ser uma coisa boa, isso se tornou um grande problema para ela. Ela foi responsável por seus pais se separarem, ninguém querer ser amigo dela e ficar sozinha por uma boa parte de sua vida apenas por esse dom.",
        categoria:  ["Slife of life", "Drama", "Comédia"],
        img:        "img_KT.jpg"
    },
    {
        ordem:      20,
        nome_anime: "Haiyore! Nyaruko-san",
        sigla:      "HN",
        descricao:  "A história gira em torno de Nyarlathotep, a divindade do caos, que chega à Terra disfarçada de Nyaruko, um dia salvando um jovem estudante do ensino médio, Yasaka Mahiro, que imediatamente se apaixonou por ele. À medida que avançamos, nossos dois protagonistas conhecerão outros alienígenas, incluindo Cthugha, que é apelidado de Kuko, loucamente apaixonado por Nyaruko, e o grande deus do vento Hastur, diz Hasuta, que está apaixonado por Mahiro.",
        categoria:  ["Slife of life", "Shounen", "Comédia"],
        img:        "img_HN.jpg"
    },
    {
        ordem:      21,
        nome_anime: "Rokudenashi majutsu akashic records",
        sigla:      "RMA",
        descricao:  "Sistine Fibel e sua melhor amiga Rumia Tingel são alunos de uma prestigiosa academia de magia, onde Sistine espera ser treinada pelos melhores para desvendar os segredos do misterioso Sky Castle, conforme o último desejo de seu avô. Quando seu instrutor favorito se aposenta repentinamente, seu substituto, Glenn Radars, é tudo menos o que Sistine esperava.",
        categoria:  ["Fantasia", "Romance", "Comédia"],
        img:        "img_RMA.jpg"
    },
    {
        ordem:      22,
        nome_anime: "Mahouka Koukou no Rettousei",
        sigla:      "MKR",
        descricao:  "Magia não é um produto de lendas ou contos de fada, na verdade ela se tornou uma tecnologia da realidade desde um tempo desconhecido para as pessoas. Poderes sobrenaturais se tornaram um sistema tecnológico através da magia, enquanto a magia se tornou uma habilidade técnica.",
        categoria:  ["Fantasia", "Sci-fi", "Ação"],
        img:        "img_MKR.jpg"
    },
    {
        ordem:      23,
        nome_anime: "Re:zero",
        sigla:      "RZ",
        descricao:  "Re:Zero conta a história de Subaru Natsuki, um NEET que não faz nada além de jogos. Uma noite, depois de visitar uma loja de conveniência, ele é repentinamente convocado para outro mundo. Sem nenhum sinal de quem o convocou, ele logo faz amizade com uma garota meio elfa de cabelos prateados que se apresenta como Satella, e seu companheiro espiritual Puck.",
        categoria:  ["Fantasia", "Aventura", "Seinen"],
        img:        "img_RZ.jpg"
    },
    {
        ordem:      24,
        nome_anime: "Infinite stratos",
        sigla:      "IS",
        descricao:  "Em um futuro próximo uma cientista japonesa cria um poderoso exoesqueleto, um mecha, chamado Infinite Stratos (IS), possuindo uma tecnologia e uma capacidade de combate muito mais avançada do que qualquer outro sistema de armas, o IS ameaça desestabilizar o mundo.",
        categoria:  ["Sci-fi", "Fantasia", "Ação"],
        img:        "img_IS.jpg"
    },
    {
        ordem:      25,
        nome_anime: "Youkoso Jitsuryoku Shijou Shugi No Kyoushitsu",
        sigla:      "YJ",
        descricao:  "Escola Koudo Ikusei Senior High School, onde 100% dos alunos vão para a universidade ou arranjam emprego. Os alunos têm a liberdade de usar qualquer penteado e trazer qualquer tipo de adereço pessoal. Koudo Ikusei parece um paraíso de uma escola mas a verdade é que apenas os alunos superiores recebem tratamento preferencial.",
        categoria:  ["Suspense", "Shounen", "Drama"],
        img:        "img_YJ.jpg"
    },
    {
        ordem:      26,
        nome_anime: "Musaigen No Phantom World",
        sigla:      "MPW",
        descricao:  "A história toma lugar num futuro próximo, num mundo criado pela imaginação humana. O que os homens chamariam de fantasmas ou monstros aparecem, e são chamados de “phantoms”. O protagonista, Haruhiko Ichijo, é um primeiranista da Academia Hosea juntamente com a sua colega mais velha Mai Kawakame, que luta contra phantoms através da sua habilidade “Espírito dos cinco elementos”, Izumi Reina, que possui a habilidade “Devorador de Phantom”, e Koito Minase que luta sozinha contra os phantoms. Eles vivenciavam os altos e baixos da vida escolar até que um certo acidente lhes revela a verdade à cerca desse mundo.",
        categoria:  ["Sobrenatural", "Fantasia", "Comédia"],
        img:        "img_MPW.jpg"
    },
    {
        ordem:      27,
        nome_anime: "Motto to love-ru",
        sigla:      "ML",
        descricao:  "A história de To Love-Ru gira em torno de Rito Yuuki, um estudante do colégio que não pode (ou não consegue) se confessar para a garota de seus sonhos, Haruna Sairenji. Um dia, quando volta a casa e vai até a banheira, uma misteriosa garota nua aparece do nada. O nome dela é Lala Satarin e ela vem do planeta Deviluke, onde é a herdeira do trono. Seu pai quer que ela volte para sua casa, para que possa casar com um de seus candidatos a marido.",
        categoria:  ["Shounen", "Fantasia", "Comédia"],
        img:        "img_ML.jpg"
    },
    {
        ordem:      28,
        nome_anime: "Scarlet nexus",
        sigla:      "SN",
        descricao:  "Em um futuro distante, um hormônio psiônico foi descoberto no cérebro humano. Ele acaba concedendo às pessoas poderes extra-sensoriais e isso mudou o mundo. Assim, quando a humanidade entrou nesta nova era, mutantes conhecidos como Outros começaram a descer do céu com fome de cérebros.",
        categoria:  ["Ação", "Fantasia", "Sci-fi"],
        img:        "img_SN.jpg"
    },
    {
        ordem:      29,
        nome_anime: "Rakudai kishi",
        sigla:      "RK",
        descricao:  "A história é ambientada em um mundo de fantasia onde o cavaleiro fracassado Ikki Kurogane conhece Stella Vermillion,que é considerado um gênio em batalha. Ambos compensam fraquezas uns dos outro e formam um relacionamento ao iniciar um treinamento conjunto para se tornarem grandes cavaleiros mágicos.",
        categoria:  ["Ação", "Romance", "Sci-fi"],
        img:        "img_RK.jpg"
    }
]


const category = [
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Aventura",
        icon: "aventura.png",
        id: 'CA-Av'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Ação",
        icon: "acao.png",
        id: 'CA-Ac'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Comédia",
        icon: "comedia.png",
        id: 'CA-Co'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Drama",
        icon: "drama.png",
        id: 'CA-Dr'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Fantasia",
        icon: "fantasia.png",
        id: 'CA-Fa'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Música",
        icon: "musica.png",
        id: 'CA-Mu'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Sci-fi",
        icon: "sci_fi.png",
        id: 'CA-Sc'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Romance",
        icon: "romance.png",
        id: 'CA-Ro'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Terror",
        icon: "terror.png",
        id: 'CA-Te'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Seinen",
        icon: "seinen.png",
        id: 'CA-Se'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Shoujo",
        icon: "shoujo.png",
        id: 'CA-Shj'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Shounen",
        icon: "shounen.png",
        id: 'CA-Shn'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Slife-of-life",
        icon: "slife_of_life.png",
        id: 'CA-Sl'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Esporte",
        icon: "esporte.png",
        id: 'CA-Es'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Sobrenatural",
        icon: "sobrenatural.png",
        id: 'CA-So'
    },
    {
        type: 'div',
        attr: [
            ['class', ['title']],
            ['data-type', ['section']]
        ],
        parent: 2,
        text: "Suspense",
        icon: "suspense.png",
        id: 'CA-Su'
    }
]

// | -----------------------------------------------------------------------------------------------------------////////
// |
// | Variaveis globais
// |
// | -----------------------------------------------------------------------------------------------------------////////

const [
    item_slide,
    events,
    body,
    labels,
    itens,
    cards
] = [
    document.querySelectorAll(".item-slide"),
    document.querySelectorAll("#cards_events").children,
    document.querySelector('body'),
    document.querySelectorAll('.lb'),
    document.querySelectorAll('.item-lista'),
    document.querySelectorAll('.cards')
]


// | -----------------------------------------------------------------------------------------------------------////////
// |
// | Codigo MAIN
// |
// | -----------------------------------------------------------------------------------------------------------////////

const doc = body.childNodes[1]

switch(doc.id) {
    case 'content_intro':
        recomendados(itens, labels)
        ReduxText()
        catalogs(category)
        applicationCards()
        InsertValueInEmpty()
        applicationArrows()
        hidderArrows(4)
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


function catalogs(lista_elementos) {

    lista_elementos.forEach(elem => {
        const catalogo = createContainerCatalogy(elem)
    })

}

// ---- Função responsavel pela criação de um elemento HTML usando um dicionario ------------------

function CreateElement(obj) {

    if(typeof(obj) === 'object') {

        const element_create = document.createElement(obj.type)

        if(obj.text !== '') {
            element_create.innerHTML = obj.text
        }

        obj.attr.forEach(([key, value]) => {
            element_create.setAttribute(key, value)
        })

        if(obj.parent !== null && typeof(obj.parent) !== 'number') {
            obj.parent.appendChild(element_create)
        }

        return element_create

    }else {
        return console.error('[TypeError]: Elemento não é um objeto!')
    }

}


// ---- Função responsavel pela ativação do evento das arrows --------------------------

function actionArrows() {

    const arrows = document.querySelectorAll(".arrows")

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

function sorteados(tot) {
    let lista_escolhidos = []

    for(i = 0; i < 5; i++) {
        let numb = Math.floor(Math.random() * tot)
        while(lista_escolhidos.indexOf(numb) != -1) {
            numb = Math.floor(Math.random() * tot)
        }
        lista_escolhidos.push(numb)
    }

    return lista_escolhidos
}



// ---- Exibir cards Recomendados ----------------------

function recomendados(list, lb) { 

    let [list_random, date] = [[1, 2, 3, 4, 5], new Date().getDay()]

    if(date === 4) {
        const random = sorteados(30)
        list_random = random
    }

    atribuirValores(selectedElementsSlide(), series, list_random)

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

function selectedElementsSlide() {

    const itens = document.querySelectorAll('.item-lista')
    let list_elements = []

    itens.forEach(elem => {
        let list_docs = []

        const imgs_slide = elem.childNodes[1].children[0]
        list_docs.push(imgs_slide)

        const docs_slide = elem.childNodes[3].children

        docs_slide[0].childNodes.forEach(item => {

            if(typeof(item.classList) === 'object') {
                
                const to_array = Array.from(item.classList)

                to_array.find(item_element => {
                    if(item_element === 'slide-title' || item_element === 'slide-detail') {
                        list_docs.push(item)
                    }
                })
            }
        })

        list_docs.push(docs_slide[1])
        list_elements.push(list_docs)
    })

    return list_elements
}


function atribuirValores(list_values, ref_list, list_random) {

    for(let i = 0; i < list_random.length; i++) {
        list_values[i].forEach(item => {

            if(item.hasAttribute('src')) {
                item.setAttribute('src', `../PW-anime/img/capas_cards/${ref_list[list_random[i]].img}`)
            }else {

                const new_array = Array.from(item.classList)

                new_array.find(cls => {
                    if(cls === 'slide-title') {
                        item.innerHTML = ref_list[list_random[i]].nome_anime
                    }else if(cls === 'slide-detail') {

                        ref_list[list_random[i]].categoria.forEach(elem_list => {
                            const element_li = document.createElement('li')
                            element_li.innerHTML = elem_list
                            item.appendChild(element_li)
                        })

                    }else if(cls === 'slide-description') {
                        item.innerHTML = ref_list[list_random[i]].descricao
                    }
                })
            }
        })
    }

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

    const arrows = document.querySelectorAll(".arrows")

    arrows.forEach(element => {
        const parent_element = element.parentNode.children[1].children

        if(parent_element.length == 0 || parent_element.length <= n_element) {

            element.classList.add('d-none')
            element.classList.remove('arrows')

        }

    })
}


// ---- Inserindo um texto padrão onde uma lista do catalogo não tiver filhos ------------------

function InsertValueInEmpty() {

    const container_category = document.querySelectorAll('div[data-type="container_category_t"]')

    container_category.forEach(element => {
        const container = element.childNodes[1]

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


// ---- Expandira uma aba de lista de conteudos ------------------

function ContainerSelection(target, element, icon) {
    const [
        extend, 
        container, 
        icons_arrow,
    ] = [
        document.querySelector(target), 
        document.querySelector(element), 
        document.querySelector(icon),
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

// ---- Função responsavel pela expansao do menu ------------------

function ScreenWidth() {
    const screen_width = window.innerWidth
    return screen_width
}


// ---- Função responsavel pela organização de elementos HTML ------------------

function organizarElementosHTML(list_elements, elements_create) {
    
    let ultimo_elemento = ''

    for(let i = 0; i < list_elements.length; i++) {

        if(list_elements[i].parent === null) {
            
            ultimo_elemento.appendChild(elements_create[i])
            ultimo_elemento = elements_create[i]

        }else if(typeof(list_elements[i].parent) === 'number') {

            elements_create[list_elements[i].parent].appendChild(elements_create[i])
            ultimo_elemento = elements_create[i]

        }

        ultimo_elemento = elements_create[i]

    }
}


// ---- Função responsavel por criar os containers catalogo e aplica-los ------------------

function createContainerCatalogy(elem_list_card) {

    let elements_create = []
    
    const list_elements = [
        {
            type: 'div',
            attr: [
                ['class', ['container']],
                ['data-type', ['column']]
            ],
            parent: document.querySelector('#section_catalogy'),
            text: ''
        },
        {
            type: 'div',
            attr: [
                ['class', ['container p-0']],
                ['data-type', ['caption']]
            ],
            parent: null,
            text: ''
        },
        {
            type: 'div',
            attr: [
                ['class', ['d-flex-align']],
            ],
            parent: null,
            text: ''
        },
        {
            type: 'img',
            attr: [
                ['src', ['PW-anime/img/icons/fontisto_map-6.png']],
                ['alt', ' ']
            ],
            parent: 2,
            text: ''
        },
        elem_list_card,
        {
            type: 'a',
            attr: [
                ['href', ['catalogo.html']]
            ],
            parent: 1,
            text: ''
        },
        {
            type: 'abbr',
            attr: [
                ['title', ['Visitar catalogo']]
            ],
            parent: null,
            text: ''
        },
        {
            type: 'img',
            attr: [
                ['class', ['icon']],
                ['src', ['PW-anime/img/icons/grommet-icons_catalog.png']],
                ['alt', 'catalog.png']
            ],
            parent: null,
            text: ''
        },
        {
            type: 'div',
            attr: [
                ['class', ['container pos-rel']],
                ['data-type', ['container_category_t']]
            ],
            parent: 0,
            text: ''
        },
        {
            type: 'div',
            attr: [
                ['class', ['arrows']],
                ['data-arrow', ['prev']],
                ['data-type', ['arrow_prev']]
            ],
            parent: null,
            text: ''
        },
        {
            type: 'span',
            attr: [
                ['class', ['prev']]
            ],
            parent: null,
            text: ''
        },
        {
            type: 'ul',
            attr: [
                ['id', [`${elem_list_card.id}_list`]],
                ['class', ['container p-medio']],
                ['data-type', ['list-content']]
            ],
            parent: 8,
            text: ''
        },
        {
            type: 'div',
            attr: [
                ['class', ['arrows']],
                ['data-arrow', ['next']],
                ['data-type', ['arrow_next']]
            ],
            parent: 8,
            text: ''
        },
        {
            type: 'span',
            attr: [
                ['class', ['next']]
            ],
            parent: null,
            text: ''
        }
    ]

    list_elements.forEach(elem => {
        elements_create.push(CreateElement(elem))
    })

    organizarElementosHTML(list_elements, elements_create)

    return elements_create
}

// ---- Função responsavel por criar os cards dos catalogos ------------------

function createCardsCategory(elem_list_card, list_ref) {

    let elements_create = []
    
    const list_elements = [
        {
            type: 'li',
            attr: [],
            parent: document.querySelector(`#${list_ref}_list`),
            text: ''
        },
        {
            type: 'div',
            attr: [
                ['class', ['cards d-flex f-column']],
                ['data-type', ['anime']]
            ],
            parent: null,
            text: ''
        },
        {
            type: 'a',
            attr: [
                ['href', ['content.html']],
            ],
            parent: null,
            text: ''
        },
        {
            type: 'div',
            attr: [
                ['class', ['container-img']]
            ],
            parent: null,
            text: ''
        },
        {
            type: 'img',
            attr: [
                ['src', [`PW-anime/img/capas_cards/${elem_list_card.img}`]],
                ['alt', ' ']
            ],
            parent: null,
            text: ''
        },
        {
            type: 'div',
            attr: [
                ['class', ['container-info-card d-flex f-column']]
            ],
            parent: 2,
            text: ''
        },
        {
            type: 'div',
            attr: [
                ['class', ['title-card']]
            ],
            parent: null,
            text: `${elem_list_card.nome_anime}`
        },
        {
            type: 'div',
            attr: [
                ['class', ['detail-card']]
            ],
            parent: 5,
            text: `${'temporada'}`
        }
    ]

    list_elements.forEach(elem => {
        elements_create.push(CreateElement(elem))
    })

    organizarElementosHTML(list_elements, elements_create)

    return elements_create
}


function elementCard(list_cards, list_ref) {

    list_cards.forEach(elem => {

        for(let i = 0; i < list_ref.length; i++) {

            elem.categoria.find(item => {

                if(item === list_ref[i].text) {
                    return createCardsCategory(elem, list_ref[i].id)
                }
            })
        }
    })

}

// | -----------------------------------------------------------------------------------------------------------////////
// |
// | Funções Promises
// |
// | -----------------------------------------------------------------------------------------------------------////////

function applicationCards() {

    return new Promise((resolve, reject) => {

        try {

            resolve(elementCard(series, category))

        }catch(error) {
            throw new Error('[TypeError]', error)
        }
    })
}

function applicationArrows() {

    return new Promise((resolve, reject) => {

        try {

            resolve(actionArrows())

        }catch(error) {
            throw new Error('[TypeError]', error)
        }
    })
}
