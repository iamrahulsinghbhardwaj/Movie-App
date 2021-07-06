// {
//     type:'INCREASE_COUNT'
// }

// {
//     type:'DECREASE_COUNT'
// }

export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITIES='REMOVE_FROM_FAVOURITIES';
export const SET_SHOW_FAVOURITIES='SET_SHOW_FAVOURITIES';

//action creators
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie){
    return{
        type:ADD_FAVOURITE, 
        movie
    }
}

export function  removeFromFavourities(movie){
    return{
        type:'REMOVE_FROM_FAVOURITIES',
        movie
    }
}

export function  setShowFavourites(val){
    return{
        type:'SET_SHOW_FAVOURITIES',
        val
    }
}