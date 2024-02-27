// Bai 1
document.getElementById("Sapxep").onclick = function () {
  var so1 = +document.getElementById("number1").value;
  var so2 = +document.getElementById("number2").value;
  var so3 = +document.getElementById("number3").value;
  if (so1 <= so2 && so1 <= so3 && so2 <= so3) {
    document.getElementById("baitap1").innerHTML = so1 + " " + so2 + " " + so3;
  } else if (so1 <= so2 && so1 > so3) {
    document.getElementById("baitap1").innerHTML = so3 + " " + so1 + " " + so2;
  } else if (so1 >= so2 && so1 < so3) {
    document.getElementById("baitap1").innerHTML = so2 + " " + so1 + " " + so3;
  } else if (so1 > so2 && so1 > so3 && so2 <= so3) {
    document.getElementById("baitap1").innerHTML = so2 + " " + so3 + " " + so1;
  } else if (so1 > so2 && so1 > so3 && so2 > so3) {
    document.getElementById("baitap1").innerHTML = so3 + " " + so2 + " " + so1;
  } else
    document.getElementById("baitap1").innerHTML = so1 + " " + so3 + " " + so2;
};
// bai 2
document.getElementById("Chaohoi").onclick = function () {
  var role = document.getElementById("role").value;
  var chao;
  switch (role) {
    case "1":
      chao = "Chào Bố";
      break;
    case "2":
      chao = "Chào Mẹ";
      break;
    case "3":
      chao = "Chào Anh Trai";
      break;
    default:
      chao = "Chào Em Gái";
  }
  document.getElementById("baitap2").innerHTML = chao;
};

// bai 3
document.getElementById("ChanLe").onclick = function () {
  var so1 = +document.getElementById("one").value;
  var so2 = +document.getElementById("two").value;
  var so3 = +document.getElementById("three").value;

  if (so1 % 2 == 0 && so2 % 2 == 0 && so3 % 2 == 0) {
    document.getElementById("baitap3").innerText = "Có 3 số chẳn";
  } else if (so1 % 2 == 0 && so2 % 2 != 0 && so3 % 2 == 0) {
    document.getElementById("baitap3").innerText = "Có 2 số chẳn và 1 số lẻ";
  } else if (so1 % 2 == 0 && so2 % 2 == 0 && so3 % 2 != 0) {
    document.getElementById("baitap3").innerText = "Có 2 số chẳn và 1 số lẻ";
  } else if (so1 % 2 != 0 && so2 % 2 != 0 && so3 % 2 == 0) {
    document.getElementById("baitap3").innerText = "Có 1 số chẳn và 2 số lẻ";
  } else if (so1 % 2 != 0 && so2 % 2 == 0 && so3 % 2 != 0) {
    document.getElementById("baitap3").innerText = "Có 1 số chẳn và 2 số lẻ";
  } else
    document.getElementById("baitap3").innerHTML = "chuong trình có 3 số lẻ";
};

// Bai 4
document.getElementById("Tamgiac").onclick = function () {
  var a = +document.getElementById("canh1").value;
  var b = +document.getElementById("canh2").value;
  var c = +document.getElementById("canh3").value;
  if (a <= 0 || b <= 0 || c <= 0) {
    document.getElementById("baitap4").innerHTML =
      "Độ dài của cạnh phải lớn hơn 0";
  } else if (a == b && a != c) {
    document.getElementById("baitap4").innerHTML = "Tam giác Cân";
  } else if ((a == b) & (a == c)) {
    document.getElementById("baitap4").innerHTML = "Tam giác đều";
  } else if (a * a == b * b + c * c) {
    document.getElementById("baitap4").innerHTML = "Tam giác vuông";
  } else {
    document.getElementById("baitap4").innerHTML = "Tam giác thường";
  }
};
