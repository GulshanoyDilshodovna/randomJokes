//consts
const form = document.getElementById('form')
const input = document.getElementById('input')
const btn = document.getElementById('btn')

//form event
form.addEventListener('submit', function(e){
    e.preventDefault()
    let nbr = input.value
    fetch(`https://api.icndb.com/jokes/random/${nbr}`).then(function(data){
        return data.json()
    }).then(getResult)
    const ol = document.querySelector('ol')
    ol.innerHTML = ''

})


//get result function
function getResult(newData){
    const jokes = newData.value
    jokes.forEach((e) => {
        const li = document.createElement('li')
        document.querySelector('ol').appendChild(li)
        li.textContent = e.joke
        input.value = ''  
    });
}