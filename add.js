function add(cityName, image){
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `
        <img src="${image}" alt="${cityName} image"/>
        <p>${cityName}</p>
    `;
    document.querySelector("contents").appendChild(div);

    const sideDiv = document.createElement("div");
    sideDiv.innerHTML = cityName;
    document.querySelector("sidebar").appendChild(sideDiv);
}

function handleAdd(event){
    event.preventDefault();
    const cityName = document.querySelector("#cityName").value;
    const image = document.querySelector("#image").value;
    add(cityName, image);
    closeModal();
    console.log();
}

document.querySelector("#modal").addEventListener("submit", handleAdd);
