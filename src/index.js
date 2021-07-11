import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'; 

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//function logger(obk,next,action)
//logger(obj)(next)(action)
// const logger=function({dispatch,getState}){
//     return function(next){
//         return function(action){
//             //middleware code
            
//         }
//     }
// }

const logger=({dispatch,getState})=>(next)=>(action)=>{
    //logger code

    if(typeof action!=='function'){
      console.log('ACTION_TYPE',action.type);
    }

    next(action);
}

// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//     //logger code

//     if(typeof action=='function'){
//         action(dispatch);
//         return;
//     }
//     next(action);
// }

const store =createStore(rootReducer,applyMiddleware(logger,thunk));

// console.log('STATE',store.getState());

// export const StoreContext=createContext();

// console.log('StoreContext',StoreContext);

// class Provider extends React.Component{
//   render(){
//     const {store}=this.props;
//     return (<StoreContext.Provider value={store}>
//       {this.props.children}
//     </StoreContext.Provider>
//     );
//   }
// }

// export function connect(callback){
//   return function(Component){
//      class ConnectedComponent extends React.Component{
//         constructor(props){
//           super(props);
//           this.props.store.subscribe(()=>this.forceUpdate());
//         }
//       render(){

//             const {store}=this.props; 
//             const state=store.getState();
//             const dataToBePassedAsProps=callback(state);
//             return (
//             < Component {...dataToBePassedAsProps}
//                 dispatch={store.dispatch}
//             />
//             );
//           }
//       }

//   class ConnectedComponentWraper extends React.Component{
//     render(){
//       return (
//         <StoreContext.Consumer>
//           {(store)=><ConnectedComponent store={store} /> }
//         </StoreContext.Consumer>
//       );
//     }
//   }
//   return ConnectedComponentWraper;
//  };
// }
//console.log('store',store);
//console.log('BEFORE STATE',store.getState()); //before we send the connection  

//after state
// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// });


// console.log('AFTER STATE',store.getState());

ReactDOM.render(

  <Provider store={store}>
      <App store={store} />
  </Provider>,
document.getElementById('root'));

