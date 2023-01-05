export  const info = []
export function infoReducer(state={},action){
    if(action.type ==='change-info'){
        return action.payload.arr
    }
    return state
}
export function getInfo(state){
  return state.info
}
export function changeInfo(array){
  return {
    type:'change-info',
    payload:{
        arr:array
    }
  }
}