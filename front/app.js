
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
var response = JSON.parse(this.responseText);
console.log(response);
var ul =document.createElement('ul');
demo.appendChild(ul)
for(i=0;i<response.length;i++){
    var li = document.createElement('li')
    li.innerHTML = response[i].colors [1]
    console.log(response[i].colors)
    ul.appendChild(li)
} 

      

}
var ul =document.createElement('ul');
demo.appendChild(ul)
// for(i=0;i<response.length;i++){
    // var li = document.createElement('li');
 li.innerHTML = response[0].description
 console.log(response[0].description)
    //  ul.appendChild(li)

var ul =document.createElement('ul');
var ul =document.createElement('ul');
demo.appendChild(ul)
// for(i=0;i<response.length;i++){
    var li = document.createElement('li')
    li.innerHTML = response[0].name
    // console.log(response[0].name)

     ul.appendChild(li)
     var ul =document.createElement('ul');
     demo.appendChild(ul)
    //  for(i=0;i<response.length;i++){
         var li = document.createElement('li')
         li.innerHTML = response[0].price
          ul.appendChild(li)

// }
 }

request.open("GET", "http://localhost:3000/api/teddies");
request.send();