
function addDish(dish, id, index, currentDay) {
    const dishContainer = document.getElementById(id)
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

function seeInfo(day, index) {
    localStorage.setItem("day", day)
    localStorage.setItem("index", index)
    window.location.href = "detail_view.html"
}

function renderDishes(dayDishes,id) {
    index = 0
    dayDishes.forEach(e =>{
        addDish(e, id, index, currentDay);
        index += 1
    })
    currentDay += 1
}

renderDishes(mondayDishes, "monday-dishes")
renderDishes(tuesdayDishes, "tuesday-dishes")
renderDishes(mondayDishes, "wednesday-dishes")
renderDishes(tuesdayDishes, "thursday-dishes")
renderDishes(mondayDishes, "friday-dishes")
