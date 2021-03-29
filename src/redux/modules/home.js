import {get} from "../../utils/request";
import {url} from "../../utils/url";

export const types ={
    //fetch 猜你喜欢
    FETCH_LIKES_REQUEST:"HOME/FETCH_LIKES_REQUEST",
    FETCH_LIKES_SUCCESS:"HOME/FETCH_LIKES_SUCCESS",
    FETCH_LIKES_FAILURE:"HOME/FETCH_LIKES_FAILURE",
}
 export const actions ={
    loadLikes:()=>{
        return (dispatch,getState)=>{
            dispatch(fetchLikesRequest());
            return get(url.getProductList(0,10)).then(
                data =>{
                    dispatch(fetchLikesSuccess((data)))
                    //dispatch(action)
                },
                error=>{
                    dispatch(fetchLikesFailure(error))
                }
            )
        }
    }
 }

 const fetchLikesRequest =() =>({
  type:types.FETCH_LIKES_REQUEST
 })
const fetchLikesSuccess =(data) =>({
    type:types.FETCH_LIKES_SUCCESS,
    data
})
const fetchLikesFailure =(error) =>({
    type:types.FETCH_LIKES_FAILURE,
    error
})

const reducer = (state ={}, action) => {
    switch(action.type){
        case types.FETCH_LIKES_REQUEST:
        //TODO
        case types.FETCH_LIKES_SUCCESS:
        //TODO
        case types.FETCH_LIKES_FAILURE:
        default:
            return state;
    }
    return state;
}
export default reducer;
