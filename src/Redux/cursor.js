export const cursor = 0
export function cursorReducer(state={},action){
    if(action.type==='ArrowTop'){
        if(state<=0){
            if(state===0){
                return action.payload.length-1
            }
            else{
                return 0
            }
        }
        else{
            return state-1
        }
    }
    else if(action.type==='ArrowDown'){
        if(state<action.payload.length){
          if(state===action.payload.length-1){
            return 0
          }
          else{
            return state+1
          }
        }
        else if(state>=action.payload.length){
            return 0
        }
    }
    else if(action.type==='enter'){
        return 0
    }
    return state
}
export function getCursor(state){
   return state.cursor
}
export function arrowTop(number){
    return {
        type:'ArrowTop',
        payload:{
            length:number
        }
    }
}
export function arrowDown(number){
    return {
        type:'ArrowDown',
        payload:{
            length:number
        }
    }
}
export function enter(number){
    return {
        type:'enter',
        payload:{
            length:number
        }
    }
}
