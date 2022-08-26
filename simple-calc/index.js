let display = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = ''
                break
            case '=':
                try{
                    display.innerText = eval(display.innerText)
                    if (display.innerText == 'undefined') {
                        display.innerText = ''
                    }
                } catch {
                    display.innerText = 'ERROR'
                }               
                break
            default:
                display.innerText += e.target.innerText
        }
    })
})