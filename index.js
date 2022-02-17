const $buttons = document.querySelectorAll("button")

$buttons.forEach((node) => {
    node.addEventListener('mousedown' , function(event){
        event.preventDefault
        const value = node.innerText.trim()
        const $result = document.querySelector(".result")
        const resultText = $result.innerText.trim()


        if(resultText == '0' || resultText == 'undefined' || resultText == 'infinity' ){
            $resultInnerText = ''
        }


        if(value == '=') {
            let solution
            solution = eval(resultText)
            $result.innerText = solution
            return true
        }
    


        if(value.toUpperCase() == 'AC') {
            $result.innerText = ''
            return true
        }



        $result.append(value)
    })
})