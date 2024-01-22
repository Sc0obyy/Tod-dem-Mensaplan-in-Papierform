window.onload = function () {
  drawFilters();
  var role;
  if (localStorage.getItem("role") === "student") {
    role = "Student/-in";
  }
  else {
    role = "Gast";
  }
  document.getElementById("sidebar-role").innerHTML = role;
}

function checkRole(price) {
  if (localStorage.getItem("role") === 'guest') {
    let char = (parseInt(Array.from(price)[0]) + 1).toString();
    var myArr = price.split("");
    myArr[0] = char
    var newPrice = myArr.join('');
    return newPrice;
  } else {
    return price;
  }
}

// adds dish card with given dish, id, index and current day
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
            <div class="dish-price">${checkRole(dish.price)}</div>
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
function renderDishes(dayDishes, id) {
  index = 0
  dayDishes.forEach(e => {
    addDish(e, id, index, currentDay);
    index += 1
  })
  currentDay += 1
}

// set dishes for the week
renderDishes(mondayDishes, "monday-dishes")
renderDishes(tuesdayDishes, "tuesday-dishes")
renderDishes(wednesdayDishes, "wednesday-dishes")
renderDishes(thursdayDishes, "thursday-dishes")
renderDishes(fridayDishes, "friday-dishes")

function setDay(day) {
  localStorage.setItem("currDay", day);
}
