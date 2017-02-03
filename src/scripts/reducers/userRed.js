
var newUser = {
  username: '',
  age: '',
  desc: ''
}

var userStore = {
  users: []
}


const userReducer = (store=(...userStore), action) => {
  let newStore = store;
  switch (action.type){
    case "NEW_USER"{
      let user = new newUser
    }
  }
  return newStore
}
