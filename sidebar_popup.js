// Opens money deposit
function open_bal() {
  document.getElementById('sidebar_overlay_bal').style.display = 'flex';
}

// opens preference selection
function open_pref() {
  document.getElementById('sidebar_overlay_pref').style.display = 'flex';
}

// close a popup
function closePopup() {
  document.getElementById('sidebar_overlay_bal').style.display = 'none';
  document.getElementById('sidebar_overlay_pref').style.display = 'none';
}

function addToArray(filter) {
  var arr = JSON.parse(localStorage.getItem("filters"));
  if (!arr.includes(filter)) {
    arr.push(filter);
  }
  else {
    var index = arr.indexOf(filter);
    arr.splice(index, 1);
  }
  localStorage.setItem("filters", JSON.stringify(arr));
  eraseFilters();
  drawFilters();
}

// function eraseFilters() {
//   var myList = document.getElementById("sidebar-preferences-list");
//   myList.querySelectorAll('li').forEach(function (item) {
//       item.remove();
//   })
// }

function eraseFilters() {
  var myLists = [
    document.getElementById("filter-selection-list"),
    document.getElementById("sidebar-preferences-list")
  ]

  myLists.forEach(e => {
    e.querySelectorAll('li').forEach(function (item) {
      item.remove();
    })
  })
}

// function drawFilters() {
//   var myList = document.getElementById("sidebar-preferences-list");
//   var arr = JSON.parse(localStorage.getItem("filters"));
//   for (let i = 0; i < arr.length; i++) {
//     const node = document.createElement("li");
//     const textNode = document.createTextNode(arr[i]);
//     node.appendChild(textNode);
//     myList.appendChild(node);
//   }
// }

function drawFilters() {
  var myLists = [
    document.getElementById("filter-selection-list"),
    document.getElementById("sidebar-preferences-list")
  ]
  var arr = JSON.parse(localStorage.getItem("filters"));

  for (let j = 0; j < myLists.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      const node = document.createElement("li");
      const textNode = document.createTextNode(arr[i]);
      node.appendChild(textNode);
      myLists[j].appendChild(node);
    }
  } 
}


document.getElementById("saldo").innerHTML = localStorage.getItem("saldo");

// adds funds to current balance
function addFunds(amount) {
  var sal = localStorage.getItem("saldo");
  sal = parseFloat(sal);
  sal += amount;
  sal = Math.round(sal * 100) / 100;
  localStorage.setItem("saldo", sal);
  document.getElementById("saldo").innerHTML = localStorage.getItem("saldo");
  closePopup();
}
