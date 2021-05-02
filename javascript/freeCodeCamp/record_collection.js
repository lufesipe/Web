var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(object, id, prop, value) {
    if (prop!="tracks" && value!=""){
        // Se prop não for atribuída como tracks e value for atribuído, atualiza ou adiciona a prop com o valor de value
        object[id][prop] = value
    } else if (object[id].hasOwnProperty("tracks")==false) {
        // Se prop for atribuída como tracks, mas o álbum não possuir essa propriedade, cria uma array com os valores de value
        object[id][prop] = [value]
    } else if (value!="") {
        // Se prop for atribuída como tracks e value não for uma string vazia, adiciona o valor de value ao fim da array tracks do álbum
        object[id][prop].push(value)
    } else {
        // Se value for uma string vazia, deleta a propriedade prop atribuída do álbum selecionado
        delete object[id][prop]
      }
    return object;
  }
  
  updateRecords(collection, 5439, 'artist', "ABBA");
  console.log(collection)