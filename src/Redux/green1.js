export const isGreen1 = false
export function isGreen1Reducer(state = {},action){
     if(action.type === 'makeGreen1'){
        return true
    }
    else if(action.type==='makeblue'){
        return false
    }
    return state
}
export function makeGreen1(){
    return {
        type:'makeGreen1'
    }
}
export function makeBlue(){
    return {
        type:'makeblue'
    }
}
export function getIsgreen1(state){
   return state.isGreen1
}
