let body = document.querySelector("body");

let createElementInput = (id) => {
    const inputTag = document.createElement('input')
    body.appendChild(inputTag);
    if (id) {
        inputTag.setAttribute('id', id)
    }

    const brTag = document.createElement('br')
    body.appendChild(brTag);
}

let createElementButton = (id) => {
    const button = document.createElement('button')
    document.body.appendChild(button)
    button.innerText = 'Submit'
    if (id) {
        button.setAttribute('id', id)
    }
}

createElementInput("a")
createElementInput("b")
createElementButton("submit")

const btnSum = document.getElementById("submit")

var result = document.createElement('p')
document.body.appendChild(result)

btnSum.onclick = () => {
    const a = parseInt(document.getElementById("a").value)
    const b = parseInt(document.getElementById("b").value)

    result.innerHTML = a + b
}