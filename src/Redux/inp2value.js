export const inp2Val = ''
export function inp2ValReducer(state={},action){
    if(action.type==='changeInp2Val'){
      return action.payload.val
    }
    return state
}
export function getInp2Val(state){
    return state.inp2Val
}
export function changeInp2Val(newval){
     return{
        type:'changeInp2Val',
        payload:{
            val:newval
        }
     }
}