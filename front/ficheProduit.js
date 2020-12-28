const urlData = new URL(document.location);
console.log(urlData)
let urlSearchParams = urlData.searchParams
let ref_produit = urlSearchParams.get('ref_produit');
 console.log(ref_produit);
console.log(urlSearchParams.get('ref'));

fetch(`http://localhost:3000/api/teddies/${ref_produit}`)
  .then(response => response.json())
  .then ( function (data){
      let paragrphe;
       

       if(data.name === undefined){
         // console.log(data.name);
         document.getElementById("contenu").innerHTML = 'PAGE INCONNUE'
         document.getElementById("contenu").style.marginLeft = '35%'
         document.getElementById("contenu").style.fontSize = '400%'
         document.getElementById("bouton").style.display = "none"
       }

      block=document.createElement ('div');
      block.classList.add('block')
      console.log(ref_produit)
     
      paragraphe=document.createElement ('p');
      let image = document.createElement('img');
      image.setAttribute ('src',data.imageUrl );
      image.setAttribute ('alt', 'nounours' );
      paragraphe.appendChild(image);
      block.appendChild(paragraphe);

      paragraphe=document.createElement('p');
      paragraphe.innerHTML= 'name :'+data.name;
      block.appendChild(paragraphe);
      
      paragraphe=document.createElement('p');
      paragraphe.innerHTML='description :'+ data.description;
      block.appendChild(paragraphe);
    
      paragraphe=document.createElement('p');
      paragraphe.innerHTML= 'price :'+  data.price + '$';
      block.appendChild(paragraphe);
      
   let select =document.createElement('select');
   select.setAttribute('name','couleurs');
   let option;
   for(i = 0;i<data.colors.length;i++){
   option = document.createElement ('option');
   option.setAttribute('value',data.colors[i]);
   console.log(data.colors[i]);
   option.innerHTML= data.colors[i];
   select.appendChild(option);

   }
   
   block.appendChild (select)
     
      document.getElementById("contenu").appendChild(block);

      document.getElementById("bouton").addEventListener("click",function(){
        
         console.log((sessionStorage.getItem('selectionProduit')));
         if (sessionStorage.getItem('selectionProduit')=== null) {
           console.log('panier vide');
          //  creer un tableau
          let tableauProduit= [ ] ;
          //  ajouter une ligne avec le produit(id nom prix liens photos)
          tableauProduit.push(data._id, data.name, data.price, data.imageUrl, data.colors.value)
          // traduire le tableau en json
       let tableauJson  = JSON.stringify(tableauProduit) 
          // mettre le json en storege
           sessionStorage.setItem("selectionProduit",tableauJson);
          } else {
            console.log('panier pas vide ');
          //  recuper ce qui est en storage
          let tableauProduit= sessionStorage.getItem("selectionProduit");
          //   traduire le json recupere en js ( j'aurait un tableau)
           let tableauJs = JSON.parse(tableauProduit);
          //    ajouter une ligne avec le produit(id nom prix liens photos)
         
           tableauJs.push(data._id, data.name, data.price, data.imageUrl, data.colors);
          //  traduire le tableau en json
         let tableauJson= JSON.stringify(tableauJs);
          // mettre le json en storege
           sessionStorage.setItem("selectionProduit",tableauJson); 
          }
           
      } );
   });
  
  


   // document.getElementById("bouton").addEventListener("click",()=>{
   //    console.log('click commande');

   // });
