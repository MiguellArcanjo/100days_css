const barraDePesquisa = document.querySelector('.barra-de-pesquisa');
const lupa = document.querySelector('.icon');
const pesquisa = document.querySelector('.hiden')
const m = document.querySelector('.menu3')
const fundoBranco = document.querySelector('.fundo-branco')
const notificao = document.querySelector('.BB')

const x = () => {
    if (pesquisa.classList.contains('hiden')) {
        pesquisa.classList.remove('hiden');
        pesquisa.classList.add('barra-de-pesquisa');
    } 

    else {
        pesquisa.classList.remove('barra-de-pesquisa');
        pesquisa.classList.add('hiden')
    }
}


const menu = () => {
    if (! fundoBranco.classList.contains('fundo-branco2') && ! notificao.classList.contains('BB2')) {
        fundoBranco.classList.remove('fundo-branco');
        fundoBranco.classList.add('fundo-branco2');
        notificao.classList.remove('BB');
        notificao.classList.add('BB2')
        m.classList.remove('menu3');
        m.classList.add('menu2');
    } else {
        fundoBranco.classList.add('fundo-branco');
        fundoBranco.classList.remove('fundo-branco2');
        notificao.classList.add('BB');
        notificao.classList.remove('BB2')
        m.classList.add('menu3');
        m.classList.remove('menu2');
    }
}