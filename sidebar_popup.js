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

// add filter to sidebar list 
function addToArray(filter, element) {
  var myList = document.getElementById("sidebar-preferences-list");
  if (element.checked) {
    if (!globalFilterArray.includes(filter)) {
      globalFilterArray.push(filter);
      const node = document.createElement("li");
      const textNode = document.createTextNode(filter);
      node.appendChild(textNode);
      myList.appendChild(node);
    }
  } else {
    var index = globalFilterArray.indexOf(filter);
    globalFilterArray.splice(index, 1);
    myList.querySelectorAll('li').forEach(function (item) {
      if (item.innerHTML === filter) {
        item.remove();
      }
    })
  }
  addFilter(filter);
  addFilter("Meine Vorlieben")
  addFilter("Meine Vorlieben")
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
