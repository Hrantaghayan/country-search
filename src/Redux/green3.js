export const isGreen3 = false
export function isGreen3Reducer(state = {},action){
    if(action.type === 'makeGreen3'){
        return true
    }
    else if(action.type==='makeblue3'){
        return false
    }
    return state
}
export function makeGreen3(){
    return {
        type:'makeGreen3'
    }
}
export function getIsgreen3(state){
   return state.isGreen3
}
export function makeblue3(){
    return {
        type:'makeblue3'
    }
 }