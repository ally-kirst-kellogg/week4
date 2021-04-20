let pageTitleElement = document.querySelector(`.page-title`)
pageTitleElement.innerHTML = 'Movies to watch!'

//let movieElements = document.querySelectorAll(`.movies-to-watch li`)

//for (let i=0; i < movieElements.length; i++) {

   // let movieElement = movieElements[i]

   // movieElement.innerHTML = `Spaceballs`
//}

let moviesList = document.querySelector(`.movies-to-watch`)

moviesList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
    <li>Starwars</li>
    <li>Apollo 13</li>
    `
    )
