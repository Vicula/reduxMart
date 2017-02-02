// console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
// import Counter from './Counter';
//
// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     // React.createElement(Counter),
//     document.getElementById('mount')
//   );
// });


const reducer = function(state, action) {
  let newState = state;
  ? action.type === "NAME_CHANGE" : () => {

  }
}


const store = createStore(reducer, {name: 'fred', age: 35});

store.subscribe( () => {
  console.log("here be the store", store.getState())
})

store.dispatch({tpye: "NAME_CHANGE", payload: 'will'})
