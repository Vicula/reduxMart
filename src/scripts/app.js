import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';


// const reducer = function(state, action) {
//   let newState = state;
//   if (action.type === "NAME_CHANGE"){
//     newState.name = action.payload
//     return newState
//   }
//   return newState
// }


var newUser = {
  username: '',
  age: '',
  desc: ''
}

var newMerch = {
  name: '',
  price: '',
  desc: '',
  seller: ''
}

var userStore = {
  users: []
}
var merchStore = {
  merch: []
}


const userReducer = (state=[], action) => {
  let newStore = [...state];
  switch (action.type){
    case "NEW_USER" : {
      let user = [...newUser]
      user.username = action.payload
      newStore.push(user)
      return newStore
      break
    }
  }
  return newStore
}
const merchReducer = (store=[], action) => {
  let newStore = store;
  switch (action.type){
    case "NEW_MERCH" : {
      let merch = new newMerch
      newStore.merch.push(merch)
      return newStore
      break;
    }
  }
  return newStore
}

const reducers = combineReducers({
  user: userReducer,
  merch: merchReducer
})



const store = createStore(reducers, {user:[], merch: []});

store.subscribe( () => {
  console.log("here be the store", store.getState())
})

store.dispatch({type: "NEW_USER", payload: 'will'})
store.dispatch({type: "NEW_USER", payload: 'amy'})
