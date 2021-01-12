let data = sessionStorage.getItem('selectionProduit');
let tableaujs = JSON.parse(data);

if (data === null) {
  // bouton invisible
  let formulaire = document.getElementById('formulaire');
  formulaire.style.display = 'none';
  let contenu = document.getElementById('contenu');
  contenu.innerHTML = ` le panier est vide ! retounez vers<a href ='index.html'> cliquez ici </a>   `;
} else {
  // bouton visible
  let block;
  let pagraphe;
  let image;
  for (i = 0; i < tableaujs.length; i = i + 5) {
    id = tableaujs[i];
    nom = tableaujs[i + 1];
    prix = tableaujs[i + 2];
    image = tableaujs[i + 3];
    couleur = tableaujs[i + 4];
    block = document.createElement('div');
    block.classList.add('block')
    paragraphe = document.createElement('p');
    paragraphe.innerHTML = `ref produit: ` + tableaujs[i];
    block.appendChild(paragraphe);

    paragraphe = document.createElement('p');
    paragraphe.innerHTML = 'name :' + tableaujs[i + 1];
    block.appendChild(paragraphe);

    paragraphe = document.createElement('p');
    paragraphe.innerHTML = 'price :' + tableaujs[i + 2] + '$';;
    block.appendChild(paragraphe);

    paragraphe = document.createElement('p');
    image = document.createElement('img');
    image.setAttribute('src', tableaujs[i + 3]);
    image.setAttribute('alt', 'nounours');
    paragraphe.appendChild(image);
    block.appendChild(paragraphe);

    paragraphe = document.createElement('p');
    paragraphe.innerHTML = `colors :` + tableaujs[i + 4];
    block.appendChild(paragraphe);


    document.getElementById("contenu").appendChild(block);


  }

  document.getElementById("bouton").addEventListener("click", function (e) {
    // faire les teste
    
    e.preventDefault();
    let inputNom = document.getElementById('inputNom');
    if (/[a-zA-Z]/.test(inputNom.value)) {
      localStorage.setItem("nom", document.getElementById("inputNom").value);
    } else {

      document.getElementById('inputNom').value = '';
      document.getElementById('inputNom').placeholder = 'insérez les bons caractères';
    }
    let inputPrenom = document.getElementById('inputPrenom');
    if (/[a-zA-Z]/.test(inputPrenom.value)) {
      localStorage.setItem("prenom", document.getElementById("inputPrenom").value);
    } else {
      document.getElementById('inputPrenom').value = '';
      document.getElementById('inputPrenom').placeholder = 'insérez les bons caractères';
    }
    let inputEmail4 = document.getElementById('inputEmail4');
    if (/[@]/.test(inputEmail4.value)) {
      localStorage.setItem("mail", document.getElementById("inputEmail4").value);
    } else {
      document.getElementById('inputEmail4').value = '';
      document.getElementById('inputEmail4').placeholder = 'insérez les bons caractères';
    }

    let inputAddress = document.getElementById("inputAddress");
    if (/[a-zA-Z0-9]/.test(inputAddress.value)) {
      localStorage.setItem("adresse", document.getElementById("inputAddress").value);
    } else {
      document.getElementById('inputAddress').value = '';
      document.getElementById('inputAddress').placeholder = 'insérez les bons caractères';
    }

    let inputVille = document.getElementById("inputAddress");
    if (/[a-zA-Z]/.test(inputVille4.value)) {
      localStorage.setItem("ville", document.getElementById("inputVille4").value);
    } else {
      document.getElementById('inputVille4').value = '';
      document.getElementById('inputVille4').placeholder = 'insérez les bons caractères';
    }
    

   
 
    if ((localStorage.getItem('prenom') &&(localStorage.getItem('nom'))&&(localStorage.getItem('mail'))&&(localStorage.getItem('adresse')&&(localStorage.getItem('ville') )!== null))) {
      document.getElementById("manque").innerHTML='valide';
      document.getElementById("manque").style.textAlign ='center';
      let contact = {
        firstName: localStorage.getItem('nom'),
        lastName: localStorage.getItem('prenom'),
        email: localStorage.getItem('mail'),
        address: localStorage.getItem('adresse'),
        city: localStorage.getItem('ville'),
  
      }
       let panier = sessionStorage.getItem('selectionProduit');
       let products = JSON.parse(panier);
      let productsId= [] ; 
      for(let i = 0 ;i<products.length;i++){
        if(i%5===0){
          productsId.push(products[i]);
        }
      }
  products = productsId;
  let data = {contact,products};
      fetch("http://localhost:3000/api/teddies/order", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
  
      })
  
      .then((response)=>response.json())
      .then((data)=>{
        alert ('le numero de commande :'+ data.orderId);
      })
      .catch((error)=>{console.log(error)});
     
    }else{
       document.getElementById("manque").innerHTML='remplissez tous les champs';
       document.getElementById("manque").style.textAlign ='center'
      alert("La commande n'est pas prise en compte !")
    }

  })
}
function deleteItems() {
  sessionStorage.clear();
}

 

if (localStorage.getItem('nom') !== null) {
  document.getElementById('inputNom').value = localStorage.getItem('nom');
}

if (localStorage.getItem('prenom') !== null) {
  document.getElementById('inputPrenom').value = localStorage.getItem('prenom');
}

if (localStorage.getItem('mail') !== null) {
  document.getElementById('inputEmail4').value = localStorage.getItem('mail');
}
if (localStorage.getItem('adresse') !== null) {
  document.getElementById('inputAddress').value = localStorage.getItem('adresse');
}

if (localStorage.getItem('ville') !== null) {
  document.getElementById('inputVille4').value = localStorage.getItem('ville');
}

