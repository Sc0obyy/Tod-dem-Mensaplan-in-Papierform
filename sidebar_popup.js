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

function eraseFilters() {
  var myList = document.getElementById("sidebar-preferences-list");
  myList.querySelectorAll('li').forEach(function (item) {
      item.remove();
  })
}

function drawFilters() {
  var myList = document.getElementById("sidebar-preferences-list");
  var arr = JSON.parse(localStorage.getItem("filters"));
  for (let i = 0; i < arr.length; i++) {
    const node = document.createElement("li");
    const textNode = document.createTextNode(arr[i]);
    node.appendChild(textNode);
    myList.appendChild(node);
    console.log(arr[i])
  }
  console.log(arr)
}

var saldo = 5.26;
document.getElementById("saldo").innerHTML = saldo;

// adds funds to current balance
function addFunds(amount) {
  saldo += amount;
  saldo.toFixed(2);
  document.getElementById("saldo").innerHTML = saldo;
  closePopup();
}
