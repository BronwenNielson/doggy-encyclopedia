

// Code for card creation
let dData = {};

fetch('doggies.json').then ((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
    
    for(const dog of data.data) {
        console.dir(dog);

        document.querySelector('.container').innerHTML += `
        <div class="card">
                <h2>${dog.name}</h2>
                <p>${dog.origin}</p>
                <div class="hwbox">
                    <div class="imperial">
                        <h3 class="height">Height:</h3>
                        <div class='h-data' data-himp="${String(dog.height.imperial)}" data-hmet="${dog.height.metric}">${dog.height.metric}</div>
                    </div>
                    <div class="metric">
                        <h3 class="weight">Weight:</h3>
                        <div class='w-data' data-wimp="${String(dog.weight.imperial)}" data-wmet="${dog.weight.metric}">${dog.weight.metric}</div>
                    </div>
                </div>
                <h3>Breed Group:</h3>
                <p>${dog.breed_group}</p>
                <h3>Bred For:</h3>
                <p>${dog.bred_for}</p>
                <h3>Temperament:</h3>
                <p>${dog.temperament}</p>
                <h3>Life Span:</h3>
                <p>${dog.life_span}</p>
            </div> `
    }

// Code for Toggle button to be updated
    document.querySelector('#input-label').addEventListener ('click', () => {
        let elements = document.querySelectorAll(".h-data");
        let elementsWidth = document.querySelectorAll(".w-data")

        if (document.querySelector('#toggle').checked) {    
            for(const element of elements) {
                console.dir(element);
                element.innerHTML = String(element.getAttribute("data-himp"));
            }

            for(const element of elementsWidth) {
                element.innerHTML = String(element.getAttribute("data-wimp"));
            }
        } else {
            for(const element of elements) {
                element.innerHTML = element.getAttribute("data-hmet");
            }

            for(const element of elementsWidth) {
                element.innerHTML = element.getAttribute("data-wmet");
            }
        }
    });
});

