let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];

days.forEach(function(element) {
    var newTd = document.createElement('td'); //creer balise 'td'
    newTd.value = element; 
    newTd.innerHTML = newTd.value; // ce qui s'affiche dans la liste
    document.getElementById('i').appendChild(newTd);
    if ((newTd.value == 'Samedi')||(newTd.value == 'Dimanche')) {
        newTd.className = 'bold';
    }
});

//CORRECTION GUILLAUME
// days.sort();
// let nbDays = days.length; 
// for(let i = 0; i < nbDays; i++){
//   console.log('mon index' + i);
//   //permet de visualiser la numérotation des jours
//   let p =  document.createElement('p');
//   p.innerHTML= days[i];
//   if( days[i] == 'Samedi' || days[i] == 'Dimanche' ) {
//     p.style.fontWeight = 'bold';
//   }
//   document.body.appendChild(p);
//    // ajoute l'élement P crée ci dessus dans le html
// }