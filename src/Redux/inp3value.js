export const inp3Val = ''
export function inp3ValReducer(state={},action){
    if(action.type==='changeInp3Val'){
      return action.payload.val
    }
    return state
}
export function getInp3Val(state){
    return state.inp3Val
}
export function changeInp3Val(newval){
     return{
        type:'changeInp3Val',
        payload:{
            val:newval
        }
     }
}