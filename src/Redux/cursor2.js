export const cursor2 = 0
export function cursor2Reducer(state={},action){
    if(action.type==='ArrowTop3'){
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
    else if(action.type==='ArrowDown3'){
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
    else if(action.type==='enter3'){
        return 0
    }
    return state
}
export function getCursor2(state){
   return state.cursor2
}
export function arrowTop3(number){
    return {
        type:'ArrowTop3',
        payload:{
            length:number
        }
    }
}
export function arrowDown3(number){
    return {
        type:'ArrowDown3',
        payload:{
            length:number
        }
    }
}
export function enter3(number){
    return {
        type:'enter3',
        payload:{
            length:number
        }
    }
}