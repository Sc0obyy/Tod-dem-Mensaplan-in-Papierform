var filterArray = ["Meine Vorlieben", "Keine Nüsse", "Vegan", "Vegetarisch", "Glutenfrei", "Kaktosefrei", "High Protein"];

function displayDropdown(id) {
  document.getElementById(id).classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-button')) {
    var dropdownArray = []
    dropdownArray.push(document.getElementById("day-selection-dropdown"));
    dropdownArray.push(document.getElementById("filter-selection-dropdown"));
    for (let i = 0; i < dropdownArray.length; i++) {
      if(dropdownArray[i].classList.contains('show')) {
        dropdownArray[i].classList.remove('show');
      }
    }
  }
}

function displayDay(day) {
  document.getElementById("day-selector-button").innerHTML = day;
}

function addFilter(filter) {
  if (filterArray.includes(filter)) {
    const node = document.createElement("li");
    const textNode = document.createTextNode(filter);
    node.classList.add("selected-filter");
    node.appendChild(textNode);
    document.getElementById("filter-list").appendChild(node);
    const itemIndex = filterArray.indexOf(filter);
    if (itemIndex > -1) {
      filterArray.splice(itemIndex, 1);
    }
  } else {
    filterArray.push(filter);
    var myList = document.getElementById("filter-list");
    myList.querySelectorAll('li').forEach(function(item) {
      if (item.innerHTML === filter) {
        item.remove();
      }
    })
  }
}