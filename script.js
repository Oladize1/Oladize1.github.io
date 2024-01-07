let wordOnMarble = []

let author = document.getElementById('author')
let quote = document.getElementById('quote')


fetch("https://type.fit/api/quotes")
.then(res => res.json())
.then(data => {
    let randomQuote =  Math.floor(Math.random() * data.length)
    wordOnMarble.push(data)
    author.innerText = `~ ${data[randomQuote].author} ~`
    quote.innerText = data[randomQuote].text
})

console.log(wordOnMarble)

let inputBox = document.getElementById('input-box');
let listContainer = document.getElementById('list-container');
let addBtn = document.getElementById('btn');

addBtn.addEventListener('click', () => {
    if (inputBox.value === '') {
        alert("can't create empty list")
    } else {
        let li = document.createElement("li");
        let span = document.createElement("span")
        li.innerText = inputBox.value
        listContainer.append(li)
        span.innerHTML = "\u00d7"
        span.style.color = ' #ff5945'
        li.appendChild(span)
        inputBox.value = ''
    }
    userData()
})


listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        userData()
    } else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        userData()
    }
})


function userData() {
    localStorage.setItem("list", listContainer.innerHTML)
}

function userSavedData() {
   listContainer.innerHTML = localStorage.getItem("list")
}
userSavedData()