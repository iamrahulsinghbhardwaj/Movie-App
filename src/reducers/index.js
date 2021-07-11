import {combineReducers} from 'redux';

import {
    ADD_MOVIES,
    ADD_FAVOURITE,
    SET_SHOW_FAVOURITIES,
    REMOVE_FROM_FAVOURITIES,
    ADD_MOVIE_TO_LIST,
    ADD_SEARCH_RESULT
} from '../actions';

//if there is no state then it will initilize list and favourities with []
const initialMoviesState={
    list:[],
    favourites:[],
    showFavourites:false
}

export  function movies(state=initialMoviesState,action){
    console.log('Movies Reducers');
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
        
        return{
            ...state, //spread operator
            list:action.movies
        }

        case ADD_FAVOURITE:
        return{
            ...state,
            favourites:[action.movie,...state.favourites]
        }

        case REMOVE_FROM_FAVOURITIES:
            const filteredArray=state.favourites.filter(
                movie=>movie.Title !== action.movie.Title
            );
        return{
            ...state,
            favourites:filteredArray
        };

        case SET_SHOW_FAVOURITIES:
         return{
             ...state,
             showFavourites:action.val
         };

         case ADD_MOVIE_TO_LIST:
         return{
             ...state,
             list:[action.movie,...state.list]
         };
         default:
         return state;


    }
}

const initialSeachState={
    result:{},
    showSearchResults:false,
};

export function search (state=initialSeachState,action){
    
    switch(action.type){

        case ADD_SEARCH_RESULT:
        return{
            ...state,
            result:action.movie,
            showSearchResults:true
        } 

        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
              showSearchResults:false
            };

        default:
          return state;
    }
}

// const initialRootstate={
//     movies: initialMoviesState,
//     search: initialSeachState
// }


// export default function rootReducer(state=initialRootstate,action){
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
})