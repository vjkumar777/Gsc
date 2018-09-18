function closeit(){
  var whitebg = document.getElementById("black-background");
  var dlg = document.getElementById("dlgbox");
  whitebg.style.display="none";
  dlg.style.display = "none";
  }

  function showDialog(){
  var whitebg = document.getElementById("black-background");
  var dlg = document.getElementById("dlgbox");
  whitebg.style.display="block";
  dlg.style.display = "block";
  
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  dlg.style.left = (winWidth/2) -280/2 + "px";
  top = "150px";
 }

function oxcopy() {
    document.getElementById('inpimg').value = document.getElementById('image').value;
}
function passer() {
    document.getElementById('inpimg').value = document.getElementById('image').value;
}
function changeBackground() {
    var color = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;
    var color3 = document.getElementById("color3").value;
    var background = document.getElementById("bgc").value;

    var size1 = document.getElementById("size1").value;
    var size2 = document.getElementById("size2").value;
    var size3 = document.getElementById("size3").value;
    var font1 = document.getElementById("font1").value;
    var font2 = document.getElementById("font2").value;
    var font3 = document.getElementById("font3").value;
    var top1 = document.getElementById("top1").value;
    var top2 = document.getElementById("top2").value;
    var top3 = document.getElementById("top3").value;
    
    document.bgColor = color;
    document.bgColor = color2;
    document.bgColor = color3;
    document.bgColor = background;
    document.bgColor = size1;
    document.bgColor = size2;
    document.bgColor = size3;
    document.bgColor = font1;
    document.bgColor = font2;
    document.bgColor = font3;
    document.bgColor = top1;
    document.bgColor = top2;
    document.bgColor = top3;
    document.getElementById("edit1").style.color = color;
    document.getElementById("edit2").style.color = color2;
    document.getElementById("edit3").style.color = color3;
    
document.getElementById("edit1").style.background = background;
document.getElementById("edit2").style.background = background;
document.getElementById("edit3").style.background = background;
document.getElementById("edit1").style.fontSize = size1;
document.getElementById("edit2").style.fontSize = size2;
document.getElementById("edit3").style.fontSize = size3;
document.getElementById("edit1").style.fontFamily = font1;
document.getElementById("edit2").style.fontFamily = font2;
document.getElementById("edit3").style.fontFamily = font3;
document.getElementById("edit1").style.textAlign = top1;
document.getElementById("edit2").style.textAlign = top2;
document.getElementById("edit3").style.textAlign = top3;
}

document.getElementById("color1").addEventListener("change", changeBackground, false);
document.getElementById("color2").addEventListener("change", changeBackground, false);
document.getElementById("color3").addEventListener("change", changeBackground, false);
document.getElementById("bgc").addEventListener("change", changeBackground, false);
document.getElementById("size1").addEventListener("change", changeBackground, false); document.getElementById("size2").addEventListener("change", changeBackground, false); document.getElementById("size3").addEventListener("change", changeBackground, false);
document.getElementById("font1").addEventListener("change", changeBackground, false);
document.getElementById("font2").addEventListener("change", changeBackground, false);
document.getElementById("font3").addEventListener("change", changeBackground, false);
document.getElementById("top1").addEventListener("change", changeBackground, false);
document.getElementById("top2").addEventListener("change", changeBackground, false);
document.getElementById("top3").addEventListener("change", changeBackground, false);