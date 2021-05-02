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
    var i=0
    var c=0
    if (contacts[i].firstName!=name) {//Faz o programa achar o valor da propriedade name dentro dos objetos da array 
        for (i=0; contacts[i].firstName!=name;i++) {
            c++
            if (i==contacts.length){
                console.log("No such contact")
            }
        }
        if (contacts[c].hasOwnProperty(prop)==true){ // Testa se o valor atribuído a prop existe dentro do objeto
            console.log("A propriedade existe")
            return prop // PAREI TENTANDO RETORNAR O VALOR DE PROP PARA A FUNÇÃO
        }
    } else {        
        if (contacts[c].hasOwnProperty(prop)==true){
            return prop
        }
               
    }
}

lookUpProfile("Harry", "likes");
console.log(contacts[3]["firstName"])