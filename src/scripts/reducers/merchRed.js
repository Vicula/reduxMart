
var newMerch = {
  name: '',
  price: '',
  desc: '',
  seller: ''
}

var merchStore = {
  merch: []
}



const merchReducer = (store=merchStore, action) => {
  let newStore = store;
  switch (action.type){
    case "NEW_MERCH" : {
      let merch = new newMerch
      newStore.merch.push(merch)
      return newStore
      break;
    }
    default {
      break;
    }
  }
  return newStore
}
