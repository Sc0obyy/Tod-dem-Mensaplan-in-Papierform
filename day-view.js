var filterArray = [];
var currentDay = "Montag";
var globalCustomFilterSelected = false;

// renders all cards when page is loaded
window.onload = function () {
  renderCards(currentDay);
}

// display a dropdown, select with id
function displayDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

// unshow dropdown
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdownArray = []
    dropdownArray.push(document.getElementById("day-selection-dropdown"));
    dropdownArray.push(document.getElementById("filter-selection-dropdown"));
    for (let i = 0; i < dropdownArray.length; i++) {
      if (dropdownArray[i].classList.contains('show')) {
        dropdownArray[i].classList.remove('show');
      }
    }
  }
}

// clears filter array
function clearFilterArray() {
  filterArray = [];
  renderCards(currentDay);
  document.getElementById("filter-list").querySelectorAll('li').forEach(function (item) {
    item.remove();
  })
}

// displayed day according to dropdown choice
function displayDay(day) {
  document.getElementById("day-selector-button").innerHTML = day;
  currentDay = day;
  renderCards(currentDay);
}

// add or remove a filter to/from filter array, check if filter is "meine Vorlieben"
// if filter is "meine Vorlieben" then add/remove all vorlieben to filter array
function addFilter(filter) {
  var myList = document.getElementById("filter-list");

  if (!filterArray.includes(filter)) {
    if (filter === "Meine Vorlieben") {
      globalFilterArray.forEach(f => {
        if (!filterArray.includes(f)) {
          addFilterToArray(f, myList);
        }
      })
    }
    addFilterToArray(filter, myList)
  } else {
    if (filter === "Meine Vorlieben") {
      globalFilterArray.forEach(f => {
        if (filterArray.includes(f)) {
          removeFilterFromArray(f, myList);
        }
      })
    }
    removeFilterFromArray(filter, myList)
  }
  renderCards(currentDay);
}

// adds a filter to filterarray
function addFilterToArray(filter, myList) {
  filterArray.push(filter);
  const node = document.createElement("li");
  const textNode = document.createTextNode(filter);
  node.classList.add("selected-filter");
  node.appendChild(textNode);
  myList.appendChild(node);
}

// remove a filter from filterarray
function removeFilterFromArray(filter, myList) {
  const itemIndex = filterArray.indexOf(filter);
  if (itemIndex > -1) {
    filterArray.splice(itemIndex, 1);
  }
  myList.querySelectorAll('li').forEach(function (item) {
    if (item.innerHTML === filter) {
      item.remove();
    }
  })
}

// removes all cards from screen
function removeCards() {
  const myNode = document.getElementById("dishes-list");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

// put filter icons elements in a string
function addIconList(arr) {
  let string = ""
  for (let i = 0; i < arr.length; i++) {
    string = string.concat("", arr[i], "", "\n")
  }
  return string
}

// create card with dish properties
function createCard(dish) {
  const cardContainer = document.getElementById("dishes-list");

  cardContainer.innerHTML += `
  <li id="${dish.name}" class="dish-card">
    <div class="card-image">
      ${dish.imageURL}
    </div>
    <div class="card-description">
      <p class="card-dish-name">${dish.name}</p>
      <div class="card-dish-merkmale">
        ${addIconList(dish.FilterIcons)}
      </div>
      <div class="card-information">
        <div class="card-dish-bewertung">
          <img class="rating-icon" alt="thumbs up icon" src="resources\\icons\\thumbs-up.png">
          <p>${dish.rating}</p>
        </div>
        <p class="card-dish-preis">${dish.price}</p>
      </div>
    </div>
  </li>
  `
}
 // gets all dishes for specific day
function getDishedDay(day) {
  switch (day) {
    case "Montag":
      return mondayDishes;
    case "Dienstag":
      return tuesdayDishes;
    case "Mittwoch":
      return wednesdayDishes;
    case "Donnerstag":
      return thursdayDishes;
    case "Freitag":
      return fridayDishes;
    default:
      return;
  }
}

// function that rendes all cards for a specific day
function renderCards(day) {
  removeCards();
  let sortedFilterArray = [];
  let indexCounter = 0;

  let dishesDay = getDishedDay(day);

  for (let i = 0; i < dishesDay.length; i++) {
    if (filterArray.every(filter => dishesDay[i].Filter.includes(filter))) {
      sortedFilterArray.unshift(dishesDay[i]);
      indexCounter += 1;
    } else {
      sortedFilterArray.push(dishesDay[i]);

    }
  }
  sortedFilterArray.forEach(e => {
    createCard(e);
    if (indexCounter > 0) {
      indexCounter -= 1;
    }
    else {
      document.getElementById(e.name).classList.toggle("appliedFilter");
    }
  })
}

function setWidth() {
  var one = document.getElementById("top-left");
  var two = document.getElementById("spacer");
  style = window.getComputedStyle(one);
  wdt = style.getPropertyValue('width');
  two.style.width = wdt;
  console.log(wdt)
}

setWidth()

