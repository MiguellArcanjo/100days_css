const menu = document.querySelector('.um-dois-tres');
const xis = document.querySelector('.um');
const xis2 = document.querySelector('.tres1-0');
const encolhe1 = document.querySelector('.dois');
const encolhe2 = document.querySelector('.tres')

const x = () => {

    if (! xis.classList.contains('dir') && ! xis2.classList.contains('esq')) {

        xis.classList.add('dir');
        xis2.classList.add('esq');
        encolhe1.classList.add('encolhe1');
        encolhe2.classList.add('encolhe2');
        

    } else {
        xis.classList.remove('dir');
        xis2.classList.remove('esq');
        encolhe1.classList.remove('encolhe1');
        encolhe2.classList.remove('encolhe2');
    }

}

