
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
var response = JSON.parse(this.responseText);
console.log(response);


var ul =document.createElement('ul');
demo.appendChild(ul)
for(i=0;i<response.length;i++){
    var li = document.createElement('li')
    li.innerHTML = response[i].colors
    console.log(response[i].colors[0])
    ul.appendChild(li)
} 
var ul =document.createElement('ul');
demo.appendChild(ul)
for(i=0;i<response.length;i++){
    var li = document.createElement('li')
    li.innerHTML = response[i].price
     ul.appendChild(li)
  
}
var ul =document.createElement('ul');
demo.appendChild(ul)
for(i=0;i<response.length;i++){
    var li = document.createElement('li')
    li.innerHTML = response[i].description
     ul.appendChild(li)
}
var ul =document.createElement('ul');
demo.appendChild(ul)
for(i=0;i<response.length;i++){
    var li = document.createElement('li')
    li.innerHTML = response[i].name
     ul.appendChild(li)
}
}
};
request.open("GET", "http://localhost:3000/api/teddies");
request.send();