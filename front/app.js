//ajax
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
var response = JSON.parse(this.responseText);
// console.log(response);
}


//les object sur le prix coleur nom description
for(i=0;i<response.length;i++){
    var nounous1= document.getElementsByClassName("nounous1")
    nounous1[i].innerHTML =response[i].price + " ______  "+ response[i].name +"_______"+response[i].description+ "_______"+response[i].colors
}

 }

// fenetre modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

request.open("GET", "http://localhost:3000/api/teddies");
request.send();
