// {
//     type:'INCREASE_COUNT'
// }

// {
//     type:'DECREASE_COUNT'
// }

export const ADD_MOVIES='ADD_MOVIES';

export function addMovies(movies,id){
    return{
        type:ADD_MOVIES,
        movies
    }
}