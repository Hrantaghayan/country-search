export const error = ''
export function errorReducer(state={},action){
    if(action.type==='setError'){
      return action.payload.err
    }
    return state
}
export function getError(state){
    return state.error
}
export function steError(str){
    return {
        type:'setError',
        payload:{
            err:str
        }
    }
}
