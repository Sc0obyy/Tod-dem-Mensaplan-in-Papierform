function addDish(dish) {
    const dishContainer = document.getElementById("dishes-list")
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

function renderDishes(dayDishes) {
    dayDishes.forEach(e =>{
        addDish(e);
    })
}

renderDishes(mondayDishes)
