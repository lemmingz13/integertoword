let buttonShow = document.querySelector('.show_result')
let input = document.querySelector('.input_integer')
let body = document.querySelector('.body')

function toReadable(num) {
    let strNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let strNums2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let strNums22 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let strNums100 = ['hundred', 'thousand']

    if(String(num).length === 1) {
        return strNums[num]
    }
    if(String(num).length === 2 && num < 20) {
        return strNums2[String(num)[1]]
    }
    if(String(num).length === 2 && String(num)[1] === '0') {
        return strNums22[String(num)[0] - 2]
    }
    if(String(num).length === 2 && String(num)[1] !== '0') {
        return strNums22[String(num)[0] - 2] + ' ' + strNums[String(num)[1]]
    }
    if(num === 100) {
        return 'one hundred'
    }
    if(String(num).length === 3 && num < 1000) {
        if(String(num)[1] === '0') {
            return strNums[String(num)[0]] + ' ' + strNums100[0] + ' ' + strNums[String(num)[2]]
        } else if (String(num)[1] === '1') {
            return strNums[String(num)[0]] + ' ' + strNums100[0] + ' ' + strNums2[String(num)[2]]
        } else {
            return strNums[String(num)[0]] + ' ' + strNums100[0] + ' ' + strNums22[String(num)[1] - 2] + ' ' + strNums[String(num)[2]]
        }
    }
    if(num === 1000) {
        return 'one thousand'
    }
}

function addModal() {
    body.insertAdjacentHTML('afterBegin', `
            <div class="modal">
                <div class="modal_result_title">Your result is:</div>
                <div class="modal_result"><span class="modal_integer"></span> - <span class="modal_word"></span></div>
                <button class="modal_button">OK</button>
            </div>
            <div class="modal_blur"></div>`)
}

buttonShow.addEventListener('click', (event) => {
    if(+input.value >= 0 && +input.value <= 1000 && input.value !== '') {
        event.preventDefault()
        addModal()
        document.querySelector('.modal_integer').innerHTML = +input.value
        document.querySelector('.modal_word').innerHTML = toReadable(+input.value)
        document.querySelector('.modal_button').addEventListener('click', () => {
            input.value = ''
            document.querySelector('.modal').remove()
            document.querySelector('.modal_blur').remove()
        })
        document.querySelector('.modal_blur').addEventListener('click', () => {
            input.value = ''
            document.querySelector('.modal').remove()
            document.querySelector('.modal_blur').remove()
        })
    }
})