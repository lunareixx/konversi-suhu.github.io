function keCelcius() {
 let value = document.getElementById(
  "nilaiKelvinKeCelcius").value;
 let result = value - 273.15;
 let x = Math.round(result);
 document.getElementById(
   "hasilKelvinKeCelcius").innerHTML =
  "Hasilnya adalah : " + x + " °C";
}

function keFahrenheit() {
 let value = document.getElementById(
  "nilaiKelvinKeFh").value;
 let result = (value - 273.15) * (9 /
  5) + 32;
 let x = Math.round(result);
 document.getElementById(
   "hasilKelvinKeFh").innerHTML =
  "Hasilnya adalah : " + x + " °F";
}
