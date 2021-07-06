import {ADD_MOVIES,ADD_FAVOURITE,SET_SHOW_FAVOURITIES,REMOVE_FROM_FAVOURITIES} from '../actions';

//if there is no state then it will initilize list and favourities with []
const initialMoviesState={
    list:[],
    favourites:[]
}

export default function movies(state=initialMoviesState,action){
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
         }


        default:
        return state;
    }
}

