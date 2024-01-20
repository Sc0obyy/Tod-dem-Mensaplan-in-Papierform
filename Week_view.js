// adds dish card with given dish, id, index and current day
function addDish(dish, id, index, currentDay) {
    const dishContainer = document.getElementById(id)
    console.log(dish.name, index)
    dishContainer.innerHTML += `
    <li class="dish-card">     
        <button class="dish-card-image" onclick="seeInfo('${currentDay}', '${index}')">
            ${dish.imageURL}
        </button>
        <div class="dish-name">${dish.name}</div>
        <div class="dish-information">
            <div class="dish-rating">${dish.rating}</div>
            <div class="dish-price">${dish.price}</div>
        </div>
    </li>
    `
}

var currentDay = 0

// got to detail view
function seeInfo(day, index) {
    localStorage.setItem("day", day)
    localStorage.setItem("index", index)
    window.location.href = "detail_view.html"
}

// renders all dishes
function renderDishes(dayDishes,id) {
    index = 0
    dayDishes.forEach(e =>{
        addDish(e, id, index, currentDay);
        index += 1
    })
    currentDay += 1
}

// set dishes for the week
renderDishes(mondayDishes, "monday-dishes")
renderDishes(tuesdayDishes, "tuesday-dishes")
renderDishes(mondayDishes, "wednesday-dishes")
renderDishes(tuesdayDishes, "thursday-dishes")
renderDishes(mondayDishes, "friday-dishes")

function setDay(day) {
  localStorage.setItem("currDay", day);
}
