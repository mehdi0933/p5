
const urlData = new URL(document.location);
let urlSearchParams = urlData.searchParams
let ref_produit = urlSearchParams.get('ref_produit');
 console.log(ref_produit);
console.log(urlSearchParams.get('ref'));

fetch('http://localhost:3000/api/teddies/5beaacd41c9d440000a57d97' )
  .then(response => response.json())
  .then ( function (data){
      let paragrphe;
       console.log(data)
      block=document.createElement ('div');
      block.classList.add('block')
      
      paragraphe=document.createElement('p');
      paragraphe.innerHTML= data.name
      block.appendChild(paragraphe);
      
      paragraphe=document.createElement('p');
      paragraphe.innerHTML= data.colors
      block.appendChild(paragraphe);


      paragraphe=document.createElement('p');
      paragraphe.innerHTML= data.description
      block.appendChild(paragraphe);
    
      paragraphe=document.createElement('p');
      paragraphe.innerHTML= data.price
      block.appendChild(paragraphe);
      
      paragraphe=document.createElement('p');
      paragraphe.innerHTML= data.imageUrl
      block.appendChild(paragraphe);
     
      document.getElementById("contenu").appendChild(block);

   });
  