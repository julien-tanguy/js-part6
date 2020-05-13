let languages = ['html', 'css', 'javascript', 'php', 'mysql', 'c++','ruby','python'];

languages.forEach(function(element) {
    var newTd = document.createElement('td'); //creer balise 'option'
    newTd.value = element; //valeur de newOpt
    newTd.innerHTML = newTd.value; // ce qui s'affiche dans la liste
    document.getElementById('i').appendChild(newTd);
});

// CORRECTION MAXIME
// languagesList.forEach(function (language) {
//     document.writeln(language);
// })
// for (index = 0; index < languages.length; index++) {
//     document.write('<p>' + languages[index] + '</p>');
// }