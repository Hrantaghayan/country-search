export const FullName = []
export function fullNmaeReducer(state={},action){
        if(action.type === 'fill-fullName'){
            return action.payload.arr
        }     
    return state
}
export function getNames(state){
      return state.FullName
}
export function  fillNames(array){
    return {
        type:'fill-fullName',
        payload:{
            arr:array
        }
    } 
}
