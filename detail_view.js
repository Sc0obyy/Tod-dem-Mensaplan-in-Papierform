// go back to last view
function goBack() {
    window.history.back();
}

// set day depending on given int
function convertIntToDay(day){
    if (day == 0 || day == 2 || day == 4 ){
        return mondayDishes
    } else
    return tuesdayDishes
}

// create card with info on a dish
function addFoodInfo(day, index) {
    dish = day[index]
    const foodContainer = document.getElementById("food-info")
    foodContainer.innerHTML += `
    <div id="app">
        <div id="closeButton" onclick="goBack()">
            <span>&#9665;</span>
        </div>
        <h1 class="dish-name">${dish.name}</h1>
        <div id="imageContainer">
            ${dish.imageURL}
        </div>
        <div id="nutritionalInfo">
            <h2>Nährwerte:</h2>
            <div class="nutrition">
                <p>Kalorien: 550 kcal</p>
                <p>Protein: 12 g</p>
                <p>Kohlenhydrate: 65 g</p>
                <p>Fett: 30 g</p>
            </div>
        </div>
        <div id="notesAndAllergens">
            <h2>Hinweise:</h2>
                <ul id="Hinweise">
                </ul>   
        </div>
    </div>`
}

// create allergy information on a dish
function addAllergies(day, index){
    const allergyContainer = document.getElementById("Hinweise")
    day[index].Filter.forEach(element => {
        if (element != "Meine Vorlieben"){
            allergyContainer.innerHTML +=`
            <p>${element}</p>
            `
        }
    });
}

// call functions to create allergy information and food info
addFoodInfo(convertIntToDay(localStorage.getItem("day")), localStorage.getItem("index"))
addAllergies(convertIntToDay(localStorage.getItem("day")), localStorage.getItem("index"))

