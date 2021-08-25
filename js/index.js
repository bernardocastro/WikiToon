const baseURL = 'https://api.sampleapis.com'
fetch(`${baseURL}/cartoons/cartoons2D`)
    .then(response => response.json())
    .then(data => {
        showData(data);

    })

function showData(data) {

    const list = document.querySelector('.cartoon-list');

    for (let i = 0; i <= 23; i++) {

        if (data[i]) {

            const li = document.createElement("li");
            const div = document.createElement("div");

            const cartoonName = document.createElement("span");
            cartoonName.textContent = `Title: ${data[i].title}`;
            div.appendChild(cartoonName);

            const cartoonYear = document.createElement("span");
            cartoonYear.textContent = `Year: ${data[i].year}`
            div.appendChild(cartoonYear);

            const cartoonCreator = document.createElement("span");
            cartoonCreator.textContent = `Created By: ${data[i].creator}`;
            div.appendChild(cartoonCreator);

            const cartoonGenre = document.createElement("span");
            cartoonGenre.textContent = `Genre: ${data[i].genre}`
            div.appendChild(cartoonGenre);

            const cartoonEpisodes = document.createElement("span");
            cartoonEpisodes.textContent = `Number of episodes: ${data[i].episodes}`;
            div.appendChild(cartoonEpisodes);

            const cartoonImg = data[i].image;
            const img = document.createElement('img');
            img.setAttribute("src", cartoonImg);

            li.appendChild(img);
            li.appendChild(div);
            list.appendChild(li);
            li.classList.add("cartoon-card");
            img.classList.add("cartoon-img");
            div.classList.add("card-container")


        }

    }





}