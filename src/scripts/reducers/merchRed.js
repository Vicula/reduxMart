
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
    case "NEW_USER" : {
      let user = new newUser
    }
  }
  return newStore
}
