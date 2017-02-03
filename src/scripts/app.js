import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


const reducer = function(state, action) {
  let newState = state;
  if (action.type === "NAME_CHANGE"){
    newState.name = action.payload
    return newState
  }
  return newState
}


const store = createStore(reducer, {name: 'fred', age: 35});

store.subscribe( () => {
  console.log("here be the store", store.getState())
})

store.dispatch({type: "NAME_CHANGE", payload: 'will'})
