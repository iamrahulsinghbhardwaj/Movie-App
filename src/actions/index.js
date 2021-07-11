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
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';

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

export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    };
}

export function handleMovieSearch(movie){
    const url=`https://www.omdbapi.com/?t=${movie}&apikey=119ec334`;

    return function(dispatch){
        
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            console.log('movie',movie);

            //dispatch an action
            dispatch(addMovieSearchResult(movie));
        })
    }   
}

export function addMovieSearchResult(movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    };
}