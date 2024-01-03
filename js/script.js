function showLuasSegitiga() {
  document.querySelector(".luasSegitiga").style.display = "flex";
  document.querySelector(".kelilingSegitiga").style.display = "none";
}

function showKelilingSegitiga() {
  document.querySelector(".luasSegitiga").style.display = "none";
  document.querySelector(".kelilingSegitiga").style.display = "flex";
}

function hitungLuas() {
  var alas = parseFloat(document.getElementById("alas").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);
  if (isNaN(alas) || isNaN(tinggi)) {
    showAlert("Masukkan nilai alas dan tinggi yang valid.");
    return;
  }
  var luas = 0.5 * alas * tinggi;
  document.getElementById("luasResult").innerText = "Luas Segitiga: " + luas;
  toggleButtons(true);
}

function hitungKeliling() {
  var sisi1 = parseFloat(document.getElementById("s1").value);
  var sisi2 = parseFloat(document.getElementById("s2").value);
  var sisi3 = parseFloat(document.getElementById("s3").value);
  if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
    showAlert("Masukkan nilai sisi yang valid.");
    return;
  }
  var keliling = sisi1 + sisi2 + sisi3;
  document.getElementById("kelilingResult").innerText =
    "Keliling Segitiga: " + keliling;
  toggleButtons(false);
}

function resetLuas() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("luasResult").innerText = "";
  toggleButtons(false);
}

function resetKeliling() {
  document.getElementById("s1").value = "";
  document.getElementById("s2").value = "";
  document.getElementById("s3").value = "";
  document.getElementById("kelilingResult").innerText = "";
  toggleButtons(false);
}

function toggleButtons(isHitung) {
  document.querySelector('.luasSegitiga button[value="hitung"]').disabled =
    isHitung;
  document.querySelector('.kelilingSegitiga button[value="hitung"]').disabled =
    isHitung;
  document.querySelector('.luasSegitiga button[value="reset"]').disabled =
    !isHitung;
  document.querySelector('.kelilingSegitiga button[value="reset"]').disabled =
    !isHitung;
}

function showAlert(message) {
  document.getElementById("alertMessage").innerText = message;
  document.getElementById("alertOverlay").style.display = "flex";
}

function hideAlert() {
  document.getElementById("alertOverlay").style.display = "none";
}
