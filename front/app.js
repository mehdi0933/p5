
var request = new XMLHttpRequest();
request.onreadystatechange = function () {
if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
var response = JSON.parse(this.responseText);
// console.log(response);
}




var ul =document.createElement('ul');
demo.appendChild(ul)

for(i=4;i<response.length;i++){
    var li = document.createElement('li')
    li.textContent = response[0].price + " ______  "+ response[0].name +"_______"+response[0].description+ "_______"+response[0].colors 
    console.log(response[i].name)
    ul.appendChild(li)
} 
var ul =document.createElement('ul');
test.appendChild(ul)
for(i=4;i<response.length;i++){
    var li = document.createElement('li')
    li.textContent = response[1].price + " ______  "+ response[1].name +"_______"+response[1].description+ "_______"+response[1].colors 
    console.log(response[i].name)
    ul.appendChild(li)
} 
var ul =document.createElement('ul');
hsp.appendChild(ul)

for(i=4;i<response.length;i++){
    var li = document.createElement('li')
    li.textContent = response[1].price + " ______  "+ response[2].name +"_______"+response[2].description+ "_______"+response[2].colors 
    console.log(response[i].name)
    ul.appendChild(li)
} 
var ul =document.createElement('ul');
toto.appendChild(ul)
for(i=4;i<response.length;i++){
    var li = document.createElement('li')
    li.textContent = response[3].price + " ______  "+ response[3].name +"_______"+response[3].description+ "_______"+response[3].colors 
    console.log(response[i].name)
    ul.appendChild(li)
} 
var ul =document.createElement('ul');
tata.appendChild(ul)

for(i=4;i<response.length;i++){
    var li = document.createElement('li')
    li.textContent = response[4].price + " ______  "+ response[4].name +"_______"+response[4].description+ "_______"+response[4].colors 
    console.log(response[i].name)
    ul.appendChild(li)
} 

      
// var ul =document.createElement('ul');
// demo.appendChild(ul)


// // }
// var ul =document.createElement('ul');
// demo.appendChild(ul)
// // for(i=0;i<response.length;i++){
//     // var li = document.createElement('li');
//  li.innerHTML = response[0].description
//  console.log(response[0].description)
//     //  ul.appendChild(li)

// var ul =document.createElement('ul');
// var ul =document.createElement('ul');
// demo.appendChild(ul)
// // for(i=0;i<response.length;i++){
//     var li = document.createElement('li')
//     li.innerHTML = response[0].name
//     // console.log(response[0].name)

//      ul.appendChild(li)
//      var ul =document.createElement('ul');
//      demo.appendChild(ul)
//     //  for(i=0;i<response.length;i++){
//          var li = document.createElement('li')
//          li.innerHTML = response[0].price
//           ul.appendChild(li)

}
 

request.open("GET", "http://localhost:3000/api/teddies");
request.send();
// for(i=0;i<response.length;i++){
//     demo.appendChild(ul)
//     var ul =document.createElement('ul');

//         var li = document.createElement('li')
//         li.innerHTML = response[i]
//          li.innerHTML = response[i].name
//         // li.innerHTML = response[2]
//         // li.innerHTML = response[3]
//         // li.innerHTML = response[4]
//         console.log(response[i].name)
//         // console.log(response[1])
//         // console.log(response[2])
//         // console.log(response[3])
//         // console.log(response[4])



//         ul.appendChild('li')
// }