function addDish(dish, id) {
    const dishContainer = document.getElementById(id)
    dishContainer.innerHTML += `
    <li class="dish-card">
                        <div class = "dish-card-image">
                            ${dish.imageURL}
                        </div>
                        <div class="dish-name">${dish.name}</div>
                        <div class="dish-information">
                            <div class="dish-rating">${dish.rating}</div>
                            <div class="dish-price">${dish.price}</div>
                        </div>
                    </li>
    `
}

function renderDishes(dayDishes,id) {
    dayDishes.forEach(e =>{
        addDish(e, id);
    })
}

renderDishes(mondayDishes, "monday-dishes")
renderDishes(tuesdayDishes, "tuesday-dishes")
renderDishes(mondayDishes, "wednesday-dishes")
renderDishes(tuesdayDishes, "thursday-dishes")
renderDishes(mondayDishes, "friday-dishes")
