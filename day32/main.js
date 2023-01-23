const numero = document.querySelector('.numero');
const mais = document.querySelector('.mais');
const menos = document.querySelector('.menos');

let contador = 0
numero.innerHTML = `${contador}`




const cric = () => {

    if (! numero.classList.contains('sobe')) {
        numero.classList.add('sobe')
    }
    
    setTimeout(() => {
        contador ++
        numero.innerHTML = `${contador}`

        numero.classList.remove('sobe')
    }, 200)

}
    

const cric2 = () => {
    if (! numero.classList.contains('desce')) {
        numero.classList.add('desce')
    }
    
    setTimeout(() => {
        contador --
        numero.innerHTML = `${contador}`

        numero.classList.remove('desce')
    }, 200)
}