function toggleTable(tableId) {
  var table = document.getElementById(tableId);
  if (table.style.display === "none") {
    table.style.display = "block";
  } else {
    table.style.display = "none";
  }
}