export const cursor1 = 0
export function cursor1Reducer(state={},action){
    if(action.type==='ArrowTop2'){
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
    else if(action.type==='ArrowDown2'){
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
    else if(action.type==='enter2'){
        return 0
    }
    return state
}
export function getCursor1(state){
   return state.cursor1
}
export function arrowTop2(number){
    return {
        type:'ArrowTop2',
        payload:{
            length:number
        }
    }
}
export function arrowDown2(number){
    return {
        type:'ArrowDown2',
        payload:{
            length:number
        }
    }
}
export function enter2(number){
    return {
        type:'enter2',
        payload:{
            length:number
        }
    }
}