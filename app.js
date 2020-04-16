const app = document.getElementById('root')

        const logo = document.createElement('img')
        logo.src = 'logo.png'

        const container = document.createElement('div')
        container.setAttribute('class', 'container')

        app.appendChild(logo)
        app.appendChild(container)

fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => {
        return response.json()
    })
    .then(films => {

        films.forEach(film => {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = film.title

            const release = document.createElement('release')
            release.textContent = "Release Year: " + film.release_date

            const score = document.createElement('score')
            score.textContent = "Score: " + film.rt_score

            const director = document.createElement('director')
            director.textContent = "Directed by: " + film.director

            const p = document.createElement('p')
            film.description = film.description.substring(0, 300)
            p.textContent = `${film.description}...`

            container.appendChild(card)
            card.appendChild(h1)
            card.appendChild(release)
            card.appendChild(score)
            card.appendChild(director)
            card.appendChild(p)
        });
    })