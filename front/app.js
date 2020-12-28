
//ajax
fetch('http://localhost:3000/api/teddies')
  .then(response => response.json())
  .then ( function (data){
    let paragraphe ;
    let block ;

    for(i=0;i<data.length;i++){
        console.log(data)
      block=document.createElement ('div');
      block.classList.add('block')

      
      paragraphe=document.createElement ('p');
      let image = document.createElement('img');
      image.setAttribute ('src',data[i].imageUrl );
      image.setAttribute ('alt', 'nounours' );
      paragraphe.appendChild(image);
      block.appendChild(paragraphe);
      
      paragraphe=document.createElement('p');
      paragraphe.innerHTML='name :'+data[i].name;
      block.appendChild(paragraphe);

     

      paragraphe=document.createElement ('p');
      paragraphe.textContent='ref_produit :'+data[i]._id;
      block.appendChild(paragraphe);
     


      paragraphe=document.createElement ('p');
      paragraphe.textContent='price :'+ data[i].price +'$';
      block.appendChild(paragraphe);


      paragraphe=document.createElement ('p');
      paragraphe.textContent='description :'+ data[i].description;
      block.appendChild(paragraphe);

      paragraphe = document.createElement ('p');
      let lien = document.createElement('a')
      lien.setAttribute ('href',"http://127.0.0.1:5502/front/page_produit.html?ref_produit="+data[i]._id );
      lien.textContent = "detail";
      paragraphe.appendChild(lien);
      block.appendChild(paragraphe);
      // document.getElementById("contenu").appendChild(menu);

      


      document.getElementById("contenu").appendChild(block);
      
  
      

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

  