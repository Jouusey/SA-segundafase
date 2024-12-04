import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

const [bairro, setBairro] = useState('Monte Verde')
const [vetorObjetosUsuarios, setVetorObjetosUsuarios] = useState([])
const [usuarioLogado, setUsuarioLogado] = useState(false)
const [posicaoUsuario, setPosicaoUsuario] = useState('vazio')

const [biblioteca, setBiblioteca] = useState([
    {
        tituloLivro: 'Dom Casmurro',
        autorLivro: 'Machado de Assis',
        isbnLivro: '9788594318602',
        anoLivro: '1899',
        editoraLivro: 'Livraria Garnier (primeira edição)',
        sinopseLivro: 'Dom Casmurro, a obra mais conhecida do escritor Machado de Assis, conta a história de Bentinho e Capitu, que, apaixonados na adolescência, têm que enfrentar um obstáculo à realização de seus anseios amorosos, pois a mãe de Bentinho, D. Glória, fez uma promessa de que seu filho seria padre. Assim, no seminário, Bentinho conhece Escobar, que se torna seu melhor amigo e encontra uma solução para o problema.',
    },
    {
        tituloLivro: 'Vidas secas - Edição oficial',
        autorLivro: 'Graciliano Ramos',
        isbnLivro: '9788501114785',
        anoLivro: '2019',
        editoraLivro: 'Record; 159ª edição',
        sinopseLivro: 'Lançado originalmente em 1938, Vidas secas retrata a vida miserável de uma família de retirantes sertanejos obrigada a se deslocar de tempos em tempos para áreas menos castigadas pela seca. O pai, Fabiano, caminha pela paisagem árida da caatinga do Nordeste brasileiro com a sua mulher, Sinha Vitória, e os dois filhos. São também acompanhados pela cachorrinha da família, Baleia. O livro denuncia fortemente as mazelas do povo brasileiro, principalmente a situação de miséria do sertão nordestino. É o romance em que Graciliano alcança o máximo da expressão que vinha buscando em sua prosa: o que impulsiona os personagens é a seca, áspera e cruel, e paradoxalmente a ligação telúrica, afetiva, que expõe naqueles seres em retirada, à procura de meios de sobrevivência e um futuro.',
    },
    {
        tituloLivro: 'Battle Royale',
        autorLivro: 'Koushun Takami',
        isbnLivro: '9788525056122',
        anoLivro: '2014',
        editoraLivro: 'Alt; 1ª edição',
        sinopseLivro: 'Battle Royale se passa em uma versão fictícia do Japão, apresentado como um estado policial. O estado, conhecido como a República da Grande Ásia Oriental (大東亜共和国 Dai Tōa Kyōwakoku), se originou após uma revolta populacional e sofreu uma repressão pela junção das Forças Armadas e das Forças de Polícia. De tempos em tempos, 42 alunos do 9º ano de alguma escola secundária são selecionados aleatoriamente para pegar armas e lutar entre si até que somente um sobreviva. O Programa foi criado, supostamente, como uma forma de pesquisa militar, com o resultado de cada batalha sendo transmitido na televisão.',
    },
    {
        tituloLivro: 'Romeu e Julieta',
        autorLivro: 'William Shakespeare',
        isbnLivro: '9788582850404',
        anoLivro: '2016',
        editoraLivro: 'Penguin-Companhia; 1ª edição',
        sinopseLivro: 'Há muito tempo duas famílias banham em sangue as ruas de Verona. Enquanto isso, na penumbra das madrugadas, ardem as brasas de um amor secreto. Romeu, filho dos Montéquio, e Julieta, herdeira dos Capuleto, desafiam a rixa familiar e sonham com um impossível futuro, longe da violência e da loucura. Romeu e Julieta é a primeira das grandes tragédias de William Shakespeare, e esta nova tradução de José Francisco Botelho recria com maestria o ritmo ao mesmo tempo frenético e melancólico do texto shakespeariano.',
    },
    {
        tituloLivro: 'Capitães de areia',
        autorLivro: 'Jorge Amado',
        isbnLivro: '9788535914061',
        anoLivro: '2009',
        editoraLivro: 'Companhia de Bolso; Edição de bolso',
        sinopseLivro: 'Ao longo de sete décadas a narrativa não perdeu viço nem atualidade, pelo contrário: a vida urbana dos meninos pobres e infratores ganhou contornos trágicos e urgentes. Várias gerações de brasileiros sofreram o impacto e a sedução desses meninos que moram num trapiche abandonado no areal do cais de Salvador, vivendo à margem das convenções sociais. Verdadeiro romance de formação, o livro nos torna íntimos de suas pequenas criaturas, cada uma delas com suas carências e suas ambições: do líder Pedro Bala ao religioso Pirulito, do ressentido e cruel Sem-Pernas ao aprendiz de cafetão Gato, do sensato Professor ao rústico sertanejo Volta Seca. Com a força envolvente da sua prosa, Jorge Amado nos aproxima desses garotos e nos contagia com seu intenso desejo de liberdade.',
    },
    {
        tituloLivro: 'A Cidade Sem Amanhã',
        autorLivro: 'Helena Martins',
        isbnLivro: '9788598723451',
        anoLivro: '2019',
        editoraLivro: 'Lume Editora',
        sinopseLivro: 'Em um mundo onde o tempo parou, os habitantes de uma cidade vivem presos em um único dia. Porém, um jovem chamado Daniel descobre um relógio misterioso que pode trazer o amanhã de volta – mas a um custo devastador.',
    },
    {
        tituloLivro: 'As Sombras do Pântano',
        autorLivro: 'Rodrigo Salgado',
        isbnLivro: '9788543981203',
        anoLivro: '2016',
        editoraLivro: 'Estrela Negra',
        sinopseLivro: 'Uma vila isolada à beira de um pântano começa a sofrer ataques misteriosos. Quando uma jovem resolve investigar, ela descobre que há mais segredos enterrados no pântano do que ela imaginava.',
    },
    {
        tituloLivro: 'O Último Relógio',
        autorLivro: 'Sofia Almeida',
        isbnLivro: '9788578465143',
        anoLivro: '2021',
        editoraLivro: 'Horizonte Publicações',
        sinopseLivro: 'Após um colapso global, a humanidade vive em bolsões de tempo isolados. Um grupo de viajantes tenta sincronizar os relógios para impedir que a linha do tempo desapareça para sempre.',
    },
    {
        tituloLivro: 'Sob as Estrelas Vermelhas',
        autorLivro: 'Lucas Andrade',
        isbnLivro: '9788534512876',
        anoLivro: '2018',
        editoraLivro: 'Cosmos Editora',
        sinopseLivro: 'Em um planeta distante, duas civilizações lutam pelo domínio de um recurso vital. Um arqueólogo descobre uma profecia que pode unir ou destruir ambas as raças.',
    },
    {
        tituloLivro: 'A Ilha dos Esquecidos',
        autorLivro: 'Mariana Ribeiro',
        isbnLivro: '9788542104923',
        anoLivro: '2020',
        editoraLivro: 'Oceanus',
        sinopseLivro: 'Um grupo de exploradores naufraga em uma ilha misteriosa onde o tempo e a memória funcionam de forma diferente. Apenas um deles consegue se lembrar de quem realmente são.',
    },
    {
        tituloLivro: 'Ventos do Norte',
        autorLivro: 'Fernando Azevedo',
        isbnLivro: '9788564891372',
        anoLivro: '2017',
        editoraLivro: 'Ventania Editora',
        sinopseLivro: 'Durante uma era glacial, uma tribo nômade precisa viajar para o norte em busca de terras férteis, enfrentando forças naturais e sobrenaturais pelo caminho.',
    },
    {
        tituloLivro: 'O Guardião do Labirinto',
        autorLivro: 'Ana Paula Souza',
        isbnLivro: '9788575213983',
        anoLivro: '2015',
        editoraLivro: 'Labirinto Editorial',
        sinopseLivro: 'Em um reino antigo, um jovem deve atravessar um labirinto guardado por uma criatura mítica para salvar sua irmã. No caminho, ele descobre que o verdadeiro inimigo está dentro dele mesmo.',
    },
    {
        tituloLivro: 'A Guerra das Luzes',
        autorLivro: 'Thiago Moreira',
        isbnLivro: '9788543108944',
        anoLivro: '2022',
        editoraLivro: 'Aurora Books',
        sinopseLivro: 'Duas nações tecnologicamente avançadas entram em guerra usando armas feitas de luz pura. Um soldado desertor descobre que a guerra não é tão simples quanto parece.',
    },
    {
        tituloLivro: 'O Despertar dos Dragões',
        autorLivro: 'Clara Mendes',
        isbnLivro: '9788578456123',
        anoLivro: '2013',
        editoraLivro: 'Draconis Editora',
        sinopseLivro: 'Quando os dragões começam a acordar de um sono milenar, um reino precisa decidir se eles serão aliados ou inimigos na luta contra uma invasão iminente.',
    },
    {
        tituloLivro: 'No Coração do Abismo',
        autorLivro: 'Carlos Henrique',
        isbnLivro: '9788582397645',
        anoLivro: '2021',
        editoraLivro: 'Abismo Editorial',
        sinopseLivro: 'Uma equipe de cientistas explora uma fenda no fundo do oceano e descobre uma civilização submersa que guarda segredos que podem mudar a história da humanidade.',
    },
    {
        tituloLivro: 'A Lenda do Guardião Prateado',
        autorLivro: 'Bruno Silva',
        isbnLivro: '9788563124905',
        anoLivro: '2018',
        editoraLivro: 'Prata Editora',
        sinopseLivro: 'Um artefato mágico foi roubado, e cabe ao guardião prateado, último de sua ordem, recuperá-lo antes que caia nas mãos erradas.',
    },
    {
        tituloLivro: 'Chamas Eternas',
        autorLivro: 'Larissa Castro',
        isbnLivro: '9788549654125',
        anoLivro: '2020',
        editoraLivro: 'Fênix Editorial',
        sinopseLivro: 'Um mundo que depende de chamas mágicas para sobreviver enfrenta o caos quando o fogo começa a se apagar. Uma jovem alquimista precisa descobrir como reacender as chamas antes que seja tarde demais.',
    },
    {
        tituloLivro: 'O Código do Caos',
        autorLivro: 'Rafael Lima',
        isbnLivro: '9788576893142',
        anoLivro: '2019',
        editoraLivro: 'Código Editorial',
        sinopseLivro: 'Um hacker brilhante descobre um algoritmo que pode prever o futuro, mas cada uso do código traz consequências imprevisíveis e catastróficas.',
    },
    {
        tituloLivro: 'A Ponte do Destino',
        autorLivro: 'Camila Farias',
        isbnLivro: '9788595463129',
        anoLivro: '2021',
        editoraLivro: 'Destino Publicações',
        sinopseLivro: 'Duas cidades separadas por uma ponte mágica têm seus destinos entrelaçados. Quando a ponte desaparece, dois jovens de lados opostos precisam se unir para restaurá-la.',
    },
    {
        tituloLivro: 'Sombras na Neve',
        autorLivro: 'Eduardo Pires',
        isbnLivro: '9788534978123',
        anoLivro: '2020',
        editoraLivro: 'Tempestade Editorial',
        sinopseLivro: 'Em uma vila coberta por neve eterna, estranhas sombras começam a aparecer. Um caçador deve descobrir a origem dessas criaturas antes que destruam tudo ao seu redor.',
    }
    
])

    return(
        <GlobalContext.Provider value={{bairro, setBairro, vetorObjetosUsuarios, setVetorObjetosUsuarios, usuarioLogado, setUsuarioLogado, posicaoUsuario, setPosicaoUsuario, biblioteca, setBiblioteca}}>
            {children}
        </GlobalContext.Provider>
    )
}
