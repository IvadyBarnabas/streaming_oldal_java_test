const filmek = [
    {
        cim: "Spider-Man: Brand New Day",
        poszter: "spiderman.webp",
        ev: 2018,
        mufaj: "Fantasy, Akció",
        link: "https://example.com/spiderman"
    },
    {
        cim: "Obbsession",
        poszter: "obsession.webp",
        ev: 2026,
        mufaj: "Horror",
        link: "https://jobbmintatv.pro/online/Megszallottsag_(2025)"
    },
    {
        cim: "28 Years Later",
        poszter: "28.webp",
        ev: 2025,
        mufaj: "Horror, Thriller",
        link: "https://example.com/28-years-later"
    }
];

const filmLista = document.getElementById("film-lista");

filmek.forEach(function(film) {

    const kartya = document.createElement("div");
    kartya.classList.add("film-kartya");

    kartya.innerHTML = `
        <img src="${film.poszter}" alt="${film.cim}">
        <div class="film-info">
            <h3>${film.cim}</h3>
            <p>${film.ev} • ${film.mufaj}</p>
            <a href="${film.link}">Megnézem</a>
        </div>
    `;

    filmLista.appendChild(kartya);
});

