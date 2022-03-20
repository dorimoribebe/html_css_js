document.getElementById("modal").style.display = "none";

document.getElementById("addCity").onclick = function(){
    document.querySelector("#modal").style.display = "block";
}

document.getElementById("closeModal").onclick = function(){
    document.querySelector("#modal").style.display = "none";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}
