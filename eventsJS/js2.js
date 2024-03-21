const textarea = document.getElementById("txtArea");
const outputDiv = document.getElementById("output");
const keyCount = {};

textarea.addEventListener("keydown", function(event) {
const key = event.key.toLowerCase();
if ((/[a-z0-9]/).test(key)) {
  if (!keyCount[key]) {
    keyCount[key] = 1;
  } else {
    keyCount[key]++;
  }
    outputDiv.innerHTML = "Нажатые кнопки: " + JSON.stringify(keyCount);
}
});