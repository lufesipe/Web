var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
    for (var c=0, i=0; c<contacts.length; c++, i++){ // Executa enquanto c não atingir o tamanho do objeto
        if (contacts[c].firstName==name && contacts[c].hasOwnProperty(prop)){ 
            // Condição caso o objeto possua o nome e a prop chamada
            c=contacts.length+1 // A variável c irá valer o tamanho do objeto+1 para que o outro if não seja executado
            return contacts[i][prop] // Retorna para a função o valor da prop chamada
        } else if (contacts[c].firstName==name && contacts[c].hasOwnProperty(prop)==false) { 
            // Condição caso o objeto possua o nome, mas não possua a prop chamada
            return "No such property" // Retorna essa string para a função
        }
    }
    if (c==contacts.length){ // Caso o nome não seja achado no while, c terá o tamanho do objeto como seu valor e irá executar este if
        return "No such contact" // Retorna essa string para a função
    }
}

var resp = lookUpProfile("Akira", "likes");
console.log(resp)