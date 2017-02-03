import React from 'react';
import ReactDOM from 'react-dom';
import { combieReducers, createStore } from 'redux';


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


const userReducer = (store=userStore, action) => {
  let newStore = store;
  switch (action.type){
    case "NEW_USER" : {
      let user = new newUser
    }
  }
  return newStore
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



const store = createStore(reducer, {name: 'fred', age: 35});

store.subscribe( () => {
  console.log("here be the store", store.getState())
})

store.dispatch({type: "NAME_CHANGE", payload: 'will'})
