function keCelcius() {
 let nilai = document.getElementById(
  "nilaiKelvinKeCelcius").value;
 let hasil = value - 273.15;
 document.getElementById(
   "hasilKelvinKeCelcius").innerHTML =
  "Hasilnya adalah : " + hasil + " °C";
}

function keFahrenheit() {
 let nilai = document.getElementById(
  "nilaiKelvinKeFh").value;
 let hasil = (value - 273.15) * (9 /
  5) + 32;
 document.getElementById(
   "hasilKelvinKeFh").innerHTML =
  "Hasilnya adalah : " + hasil + " °F";
}
