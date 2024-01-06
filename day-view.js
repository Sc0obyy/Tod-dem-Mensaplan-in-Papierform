var filterArray = [];

function displayDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

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

function displayDay(day) {
  document.getElementById("day-selector-button").innerHTML = day;
}

renderCards();

function addFilter(filter) {
  var myList = document.getElementById("filter-list");
  if (!filterArray.includes(filter)) {
    filterArray.push(filter);
    const node = document.createElement("li");
    const textNode = document.createTextNode(filter);
    node.classList.add("selected-filter");
    node.appendChild(textNode);
    myList.appendChild(node);
    
  } else {
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
  removeCards();
  
  renderCards();
}

function removeCards() {
  const myNode = document.getElementById("dishes-list");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

function addIconList(arr) {
  let string = ""
  for (let i = 0; i < arr.length; i++) {
    string = string.concat("", arr[i], "", "\n")
  }
  return string
}


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



function renderCards() {
  let sortedFilterArray = [];
  let indexCounter = 0;

  for (let i = 0; i < mondayDishes.length; i++) {
    if (filterArray.every(filter => mondayDishes[i].Filter.includes(filter))) {
      sortedFilterArray.unshift(mondayDishes[i]);
      indexCounter += 1;
    } else {
      sortedFilterArray.push(mondayDishes[i]);

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




