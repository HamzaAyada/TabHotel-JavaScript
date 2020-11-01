function checkInput()
{
    let x = document.getElementById('numInput').value;
    const inputString = x.toString();
    let counter =0;
    let somme = 0;
    for (let i = 0; i < inputString.length; i ++){
        somme = somme + parseInt(inputString[i]) ;
    }
   if (somme === 3 | somme === 6 | somme === 9){
       while(counter<x) {
           counter +=3;
           if (counter > parseInt(x)){
               alert(false+": Le Nombre n'est pas divisible par 3");
               return false;
           }else if (counter === parseInt(x)){
               alert(true+": Nombre Divisibile par 3");
               return true;
           }
       }
   }else {
       alert('La somme des chiffre doit etre éguale à 3, 6 ou bien 9 ! ')
   }
}

// Dans cette exemple on n'est pas besoin de faire aucun action sur le nombre (x) sauf qu'on suivre la méthode logique des numbre dévisible par 3.
// c'est la Racine Numérique des numbre dévisible par 3; est ça ce que vous avez mentionner dans le sujet 1 [indication : la somme des chiffres doit être 3 ou 6 ou 9 ]
// la Racine numérique (RN) d'un nombre est la somme de ses chiffres, répétée jusqu'à obtenir un nombre à un seul chiffre par exemple [123 => 1+2+3 => 3 + 3 => 6].

