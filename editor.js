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
document.getElementById("edit1").innerHTML = document.getElementById("printa").value;
document.getElementById("edit2").innerHTML = document.getElementById("printb").value;
document.getElementById("edit3").innerHTML = document.getElementById("printc").value;
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

function imager1(){
document.getElementById("capture").value =  "banner1";
}
function imager2(){
document.getElementById("capture").value =  "banner2";
}
function imager3(){
document.getElementById("capture").value =  "banner3";
}
function imager4(){
document.getElementById("capture").value =  "banner4";
}
function imager5(){
document.getElementById("capture").value =  "banner5";
}
function imager6(){
document.getElementById("capture").value =  "banner6";
}
function imager7(){
document.getElementById("capture").value =  "banner7";
}
function imager8(){
document.getElementById("capture").value =  "banner8";
}
function imager9(){
document.getElementById("capture").value =  "banner9";
}
function imager10(){
document.getElementById("capture").value =  "banner10";
}
function imager11(){
document.getElementById("capture").value =  "banner11";
}
function imager12(){
document.getElementById("capture").value =  "banner12";
}
function imager13(){
document.getElementById("capture").value =  "banner13";
}
function imager14(){
document.getElementById("capture").value =  "banner14";
}
function imager15(){
document.getElementById("capture").value =  "banner15";
}
function imager16(){
document.getElementById("capture").value =  "banner16";
}
function imager17(){
document.getElementById("capture").value =  "banner17";
}
function imager18(){
document.getElementById("capture").value =  "banner18";
}
function imager19(){
document.getElementById("capture").value =  "banner19";
}
function imager20(){
document.getElementById("capture").value =  "banner20";
}
function imager21(){
document.getElementById("capture").value =  "banner21";
}
function imager22(){
document.getElementById("capture").value =  "banner22";
}
function imager23(){
document.getElementById("capture").value =  "banner23";
}
function imager24(){
document.getElementById("capture").value =  "banner24";
}
function imager25(){
document.getElementById("capture").value =  "banner25";
}
function imager26(){
document.getElementById("capture").value =  "banner26";
}
function imager27(){
document.getElementById("capture").value =  "banner27";
}
function imager28(){
document.getElementById("capture").value =  "banner28";
}
function imager29(){
document.getElementById("capture").value =  "banner29";
}
function imager30(){
document.getElementById("capture").value =  "banner30";
}
function imager31(){
document.getElementById("capture").value =  "banner31";
}
function imager32(){
document.getElementById("capture").value =  "banner32";
}
function imager33(){
document.getElementById("capture").value =  "banner33";
}
function imager34(){
document.getElementById("capture").value =  "banner34";
}
function imager35(){
document.getElementById("capture").value =  "banner35";
}
function imager36(){
document.getElementById("capture").value =  "banner36";
}
function imager37(){
document.getElementById("capture").value =  "banner37";
}
function imager38(){
document.getElementById("capture").value =  "banner38";
}
function imager39(){
document.getElementById("capture").value =  "banner39";
}
function imager40(){
document.getElementById("capture").value = "banner40";
}
function imager41(){
document.getElementById("capture").value =  "banner41";
}
function imager42(){
document.getElementById("capture").value =  "banner42";
}
function imager43(){
document.getElementById("capture").value =  "banner43";
}
function imager44(){
document.getElementById("capture").value =  "banner44";
}
function imager45(){
document.getElementById("capture").value =  "banner45";
}
function imager46(){
document.getElementById("capture").value =  "banner46";
}
function imager47(){
document.getElementById("capture").value =  "banner47";
}
function imager48(){
document.getElementById("capture").value =  "banner48";
}
function imager49(){
document.getElementById("capture").value =  "banner49";
}
function imager50(){
document.getElementById("capture").value =  "banner50";
}
function imager51(){
document.getElementById("capture").value =  "banner51";
}
function imager52(){
document.getElementById("capture").value =  "banner52";
}
function imager53(){
document.getElementById("capture").value =  "banner53";
}
function imager54(){
document.getElementById("capture").value =  "banner54";
}
function imager55(){
document.getElementById("capture").value =  "banner55";
}
function imager56(){
document.getElementById("capture").value =  "banner56";
}
function imager57(){
document.getElementById("capture").value =  "banner57";
}
function imager58(){
document.getElementById("capture").value =  "banner58";
}
function imager59(){
document.getElementById("capture").value =  "banner59";
}
function imager60(){
document.getElementById("capture").value =  "banner60";
}
function imager61(){
document.getElementById("capture").value =  "banner61";
}
function mporder(){
document.getElementById("next").click();
}
function goback(){
window.location.href = "http://systema.epizy.com/chose.html";
}
