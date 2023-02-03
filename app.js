const cards = document.getElementById('cards')
const url = 'https://jsonplaceholder.typicode.com/posts'

const getData = async (url) => {
    await fetch(url)
        .then(res =>  res.json())
        .then(data => {
            data.forEach(element => {
                const div = document.createElement('div')
                div.innerHTML = `
                    <div class="card_block">
                         <img src="channels4_profile.jpg" alt="">
                         <h2>${element.title}</h2>
                         <p>${element.body}</p>
                    </div>
                `
                cards.append(div)
            })
        })
}
getData(url)
