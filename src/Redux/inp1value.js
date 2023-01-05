export const inp1Val = ''
export function inp1ValReducer(state={},action){
    if(action.type==='changeInp1Val'){
      return action.payload.val
    }
    return state
}
export function getInp1Val(state){
    return state.inp1Val
}
export function changeInp1Val(newval){
     return{
        type:'changeInp1Val',
        payload:{
            val:newval
        }
     }
}