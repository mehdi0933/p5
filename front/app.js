
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
var response = JSON.parse(this.responseText);
// console.log(response);
}

var div =document.createElement('div');
demo.appendChild(div)

for(i=0;i<response.length;i++){
    var nounous1= document.getElementsByClassName("nounous1")
    nounous1[0].innerHTML =response[0].price + " ______  "+ response[0].name +"_______"+response[0].description+ "_______"+response[0].colors
}

for(i=0;i<response.length;i++){
    var div =document.createElement('div');
test.appendChild(div)
    var nounous2= document.getElementsByClassName("nounous1")
    nounous1[1].innerHTML =response[1].price + " ______  "+ response[1].name +"_______"+response[1].description+ "_______"+response[1].colors
    console.log(nounous1[1].innerHTML)
} 
var div =document.createElement('div');
hsp.appendChild(div)

for(i=0;i<response.length;i++){
    var nounous1= document.getElementsByClassName("nounous1")
    nounous1[2].innerHTML =response[2].price + " ______  "+ response[2].name +"_______"+response[2].description+ "_______"+response[2].colors
} 
var div =document.createElement('div');
toto.appendChild(div)
for(i=4;i<response.length;i++){
    var nounous1= document.getElementsByClassName("nounous1")
    nounous1[3].innerHTML =response[3].price + " ______  "+ response[3].name +"_______"+response[3].description+ "_______"+response[3].colors
} 
var div =document.createElement('div');
tata.appendChild(div)

for(i=4;i<response.length;i++){
    var nounous1= document.getElementsByClassName("nounous1")
    nounous1[4].innerHTML =response[4].price + " ______  "+ response[4].name +"_______"+response[4].description+ "_______"+response[4].colors
} 


 }

 function peluche(evt, nounou) {
    var i, article, boutton;
    article = document.getElementsByClassName("article");
    for (i = 0; i < article.length; i++) {
      article[i].style.display = "none";
    }
    boutton = document.getElementsByClassName("boutton");
    for (i = 0; i < boutton.length; i++) {
      boutton[i].className = boutton[i].className.replace(" active", "");
    }
    document.getElementById(nounou).style.display = "block";
    evt.currentTarget.className += " active";
  }

// function peluche(evt, nounou) {
//     var i, article, boutton;
//     article = document.getElementsByClassName("article");
//     for (i = 0; i < article.length; i++) {
//       article[i].style.display = "none";
//     }
//     boutton = document.getElementsByClassName("boutton");
//     for (i = 0; i < boutton.length; i++) {
//       boutton[i].className = boutton[i].className.replace(" active", "");
//     }
//     document.getElementById(openCity).style.display = "block";
//     evt.currentTarget.className += " active";
// }

request.open("GET", "http://localhost:3000/api/teddies");
request.send();
