//ajax
fetch('http://localhost:3000/api/teddies' )
  .then(response => response.json())
  .then ( function (data){
    let paragraphe ;
    for(i=0;i<data.length;i++){
      // var nounous1= document.getElementsByClassName("nounous1")
      // nounous1[i].innerHTML ="price : "+response[i].price +"$"+ "<br>  " +"name : "+ response[i].name +"<br>" +"description : "+ response[i].description+ "<br>"+"colors : "+ response[i].colors
    console.log(data[i].name);
    paragraphe=document.createElement ('p');
    paragraphe.textContent='name :'+data[i].name
    document.getElementById("contenu").appendChild(paragraphe);
    console.log(data[i]._id);
paragraphe=document.createElement ('p');
paragraphe.textContent='ref produit :'+data[i]._id
document.getElementById("contenu").appendChild(paragraphe);


console.log(data[i].price);
paragraphe=document.createElement ('p');
paragraphe.textContent='price :'+ data[i].price +'$'
document.getElementById("contenu").appendChild(paragraphe);

console.log(data[i].description);
paragraphe=document.createElement ('p');
paragraphe.textContent='description :'+ data[i].description
document.getElementById("contenu").appendChild(paragraphe);

console.log(data[i].imageUrl);
paragraphe=document.createElement ('p')
paragraphe.innerHTML= `<img src =`+ data[i].imageUrl+`>`
document.getElementById("contenu").appendChild(paragraphe);

}
    

  })
  




// }
// }

// imageElement.src =

 

// fenetre modal
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }
//

// var commande = document.getElementsByClassName('commande');
// for(var i=0;i<commande.length;i++){
//   commande[i].addEventListener('click',function() {
//       // console.log("commande")
//     NombreCommande();
//   })
// }
// function NombreCommande(){
//   var produireNombre = localStorage.getItem('NombreCommande');
//   console.log(produireNombre);
//   produireNombre=parseInt(produireNombre);
//   if(produireNombre){
//     localStorage.setItem('NombreCommande',produireNombre + 1);
//     document.getElementsByClassName('compte').innerHTML= produireNombre + 1;
//   }

// else{localStorage.setItem('NombreCommande',1);
// document.getElementsByClassName('compte').innerHTML= 1;
// } 
// }
// panier vide 
//selectionne les produits section storige
//au clique on l'envoie au panier
// request.open("GET", "http://localhost:3000/api/teddies");
// request.send();

  